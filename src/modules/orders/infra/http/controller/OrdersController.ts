import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    // Get order id
    const { id } = request.params;

    const findOrder = container.resolve(FindOrderService);

    const orders = await findOrder.execute({
      id,
    });

    return response.json(orders);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    // Get order data from body
    const { customer_id, products } = request.body;

    // Create order
    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      customer_id,
      products,
    });

    // Return created order
    return response.json(order);
  }
}
