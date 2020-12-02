<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Challenge 09: Database relationships in Node.js
</h3>

<p align="center">
  <a href="#rocket-about-the-application">About the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-installed-packages">Installed packages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

<!-- <img alt="Insomnia" src=./src/assets/screen-insomnia.gif /> -->

## :rocket: About the application

An application in Node.js along with TypeScript, using a database with TypeORM and ManyToMany relationships!

This is an application that allows the creation of customers, products and orders, where the customer can generate new purchase orders for certain products, such as a small e-commerce.

### Application Template

The template is available in the following URL: **[Access Template](https://github.com/Rocketseat/gostack-template-typeorm-upload)**

**Tip**: In case you don't know how to use Github repositories as templates, we have a guide in **[Rocketseat FAQ](https://github.com/Rocketseat/gostack-template-typeorm-relations).**

Navigate to the created folder and open it in the Visual Studio Code, remember to execute the command `yarn` in your terminal in order to install all the dependencies

### Application Routes

The application has the following routes:

- **`POST /customers`**: The route must receive` name` and `email` within the body of the request, with `name` being the name of the customer to be registered. When registering a new customer, it must be stored within its database and the created customer must be returned. When registering in the database, in the table `customers` you should have the fields `name`, `email`, `created_at`, `updated_at`.

- **`POST /products`**: This route must receive `name`, `price` and `quantity` within the body of the request, with `name` being the name of the product to be registered, `price` the value unit and quantity the quantity in stock of the product. With this data, a new product should be created in the database with the following fields: `name`, `price`, `quantity`, `created_at`, `updated_at`.

- **`POST /orders/`**: In this route you should receive in the body of the request the `customer_id` and an array of products, containing the` id` and the `quantity` that you want to add to a new order. Here you must register a new order in the `order` table, which will be related to the informed `customer_id`, `created_at` and `updated_at`. In the `orders_products` table, you should store `product_id`, `order_id`, `price` and `quantity`, `created_at` and `updated_at`.

- **`GET /orders/:id`**: This route must return the information for a specific order, with all the information that can be retrieved through the relationships between the `orders`, `customers` and `orders_products` table.

### Useful links

- [Cascade option TypeORM](https://github.com/typeorm/typeorm/blob/master/docs/relations.md#cascade-options)
- [Customized many-to-many relationships](https://github.com/typeorm/typeorm/blob/master/docs/many-to-many-relations.md#many-to-many-relations-with-custom-properties)
- [Eager loading with TypeORM](https://github.com/typeorm/typeorm/blob/master/docs/eager-and-lazy-relations.md#eager-relations)
- [TypeORM relationship options](https://github.com/typeorm/typeorm/blob/master/docs/find-options.md)

### Specification of tests

In each test, you have a brief description of what your application must do in order for the test suits pass.

If you have questions about what the tests are, and how to interpret them, take a look at **[Rocketseat FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-challenges).**

For this challenge we have the following tests:

<h4 align="center">
  ⚠️ Before running the tests, create a database with the name "gostack_desafio09_tests" so that all tests can run correctly ⚠️
</h4>

- **`should be able to create a new customer`**: For this test to pass, your application must allow a customer to be created, and return a json with the created customer.

- **`should not be able to create a customer with one email thats already registered`**: In order for this test to pass, your application must return an error when you try to register a customer with an email that is already registered in the database.

- **`should be able to create a new product`**: For this test to pass, your application must allow a product to be created, and return a json with the created product.

- **`should not be able to create a duplicated product`**: In order for this test to pass, your application must return an error when you try to register a product with a name that is already registered in the database.

- **`should be able to create a new order`**: For this test to pass, your application must allow an order to be created, and return a json with all the data of the created order.

- **`should not be able to create an order with an invalid customer`**: In order for this test to pass, your application must not allow the creation of a new order with a customer that does not exist in the database, returning a error.

- **`should not be able to create an order with invalid products`**: In order for this test to pass, your application must not allow the creation of a new order with products that do not exist in the database, returning an error if one or more of the products shipped does not exist in the database.

- **`should not be able to create an order with products with insufficient quantities`**: In order for this test to pass, your application must not allow the creation of a new order with a product that has no quantity available, returning an error if one or more of the products shipped does not have the required quantity.

- **`should be able to subtract an product total quantity when it is ordered`**: For this test to pass, your application must allow that, when a new order is created, the total quantity of products based on the quantity is changed requested.

- **`should be able to list one specific order`**: In order for this test to pass, you must allow the `orders/:id` route to return an order, containing all the order information with the `customer relationship` and `order_products`.

## :cd: Installed packages

The following is a list of installed packages:

- [express](https://www.npmjs.com/package/express)
- [express-async-errors](https://github.com/davidbanham/express-async-errors#readme)
- [typescript](https://www.typescriptlang.org/)
- [ts-node](https://github.com/TypeStrong/ts-node)
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev#readme)
- [jest](https://jestjs.io/docs/en/getting-started)
- [ts-jest](https://kulshekhar.github.io/ts-jest)
- [supertest](https://www.npmjs.com/package/supertest)
- [typeorm](https://github.com/typeorm/typeorm#readme)
- [pg](https://github.com/brianc/node-postgres)
- [reflect-metadata](http://rbuckton.github.io/reflect-metadata)
- [cross-env](https://github.com/kentcdodds/cross-env#readme)
- [cors](https://github.com/expressjs/cors#readme)
- [tsyringe](https://github.com/Microsoft/tsyringe#readme)

	Optional
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme)

## :memo: Licence

This project is under license from MIT. See the archive [LICENSE](LICENSE) to more details.
