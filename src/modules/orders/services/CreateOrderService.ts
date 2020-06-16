import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    // Check if user exist
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('This user does not exists');
    }

    // Check if all products quantities are valid (> 0)
    const checkNegativeQuantity = products.some(
      product => product.quantity <= 0,
    );

    if (checkNegativeQuantity) {
      throw new AppError(
        'You cannot set create an order with negative quantities',
      );
    }

    // Check if all products are in stock
    const productsFound = await this.productsRepository.findAllById(products);

    if (productsFound.length !== products.length) {
      throw new AppError(
        'You cannot create an order with a product that is not in stock',
      );
    }

    // Check if product is not out of stock
    const checkOutOfStock = products.some(product => {
      // Get quantity of product in stock
      const quantityInStock =
        productsFound.find(productFound => productFound.id === product.id)
          ?.quantity || 0;

      // Return true if quantity in stock - order quantity < 0
      return quantityInStock - product.quantity < 0;
    });

    if (checkOutOfStock) {
      throw new AppError(
        'You cannot create an order with a product that is out of stock',
      );
    }

    const productsMapped = productsFound.map(product => ({
      product_id: product.id,
      price: product.price,
      quantity:
        products.find(productFind => productFind.id === product.id)?.quantity ||
        0,
    }));

    const order = await this.ordersRepository.create({
      customer,
      products: productsMapped,
    });

    // Update stock products quantity
    await this.productsRepository.updateQuantity(products);

    return order;
  }
}

export default CreateOrderService;
