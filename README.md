<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Desafio 09: Relacionamentos com banco de dados no Node.js
</h3>

<p align="center">
  <a href="#rocket-sobre-a-aplicação">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-pacotes-instalados">Pacotes instalados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<!-- <img alt="Insomnia" src=./src/assets/screen-insomnia.gif /> -->

## :rocket: Sobre a aplicação

Uma aplicação em Node.js junto ao TypeScript, usando banco de dados com TypeORM e relacionamentos ManyToMany!!

Essa será uma aplicação que deve permitir a criação de clientes, produtos e pedidos, onde o cliente pode gerar novos pedidos de compra de certos produtos, como um pequeno e-commerce.

### Template da aplicação

O template está disponível na seguinte url: **[Acessar Template](https://github.com/Rocketseat/gostack-template-typeorm-relations)**

**Dica**: Caso não saiba utilizar repositórios do Github como template, temos um guia em **[FAQ da Rocketseat](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências.

### Rotas da aplicação

A aplicação tem as seguintes rotas:

- **`POST /customers`**: A rota deve receber `name` e `email` dentro do corpo da requisição, sendo o `name` o nome do cliente a ser cadastrado. Ao cadastrar um novo cliente, ele deve ser armazenado dentro do seu banco de dados e deve ser retornado o cliente criado. Ao cadastrar no banco de dados, na tabela `customers` deverá possuir os campos `name`, `email`, `created_at`, `updated_at`.

- **`POST /products`**: Essa rota deve receber `name`, `price` e `quantity` dentro do corpo da requisição, sendo o `name` o nome do produto a ser cadastrado, `price` o valor unitário e `quantity` a quantidade existente em estoque do produto. Com esses dados devem ser criados no banco de dados um novo produto com os seguintes campos: `name`, `price`, `quantity`, `created_at`, `updated_at`.

- **`POST /orders/`**: Nessa rota você deve receber no corpo da requisição o `customer_id` e um array de products, contendo o `id` e a `quantity` que você deseja adicionar a um novo pedido. Aqui você deve cadastrar na tabela `order` um novo pedido, que estará relacionado ao `customer_id` informado, `created_at` e `updated_at` . Já na tabela `orders_products`, você deve armazenar o `product_id`, `order_id`, `price` e `quantity`, `created_at` e `updated_at`.

- **`GET /orders/:id`**: Essa rota deve retornar as informações de um pedido específico, com todas as informações que podem ser recuperadas através dos relacionamentos entre a tabela `orders`, `customers` e `orders_products`.

### Links úteis

- [Cascade option TypeORM](https://github.com/typeorm/typeorm/blob/master/docs/relations.md#cascade-options)
- [Relacionamento many-to-many personalizado](https://github.com/typeorm/typeorm/blob/master/docs/many-to-many-relations.md#many-to-many-relations-with-custom-properties)
- [Eager loading com TypeORM](https://github.com/typeorm/typeorm/blob/master/docs/eager-and-lazy-relations.md#eager-relations)
- [Opções de relacionamentos do TypeORM](https://github.com/typeorm/typeorm/blob/master/docs/find-options.md)

### Especificação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dé uma olhada no **[FAQ da Rocketseat](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Para esse desafio, temos os seguintes testes:

<h4 align="center">
  ⚠️ Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio09_tests" para que todos os testes possam executar corretamente ⚠️
</h4>

- **`should be able to create a new customer`**: Para que esse teste passe, sua aplicação deve permitir que um cliente seja criado, e retorne um json com o cliente criado.

- **`should not be able to create a customer with one e-mail thats already registered`**: Para que esse teste passe, sua aplicação deve retornar um erro quando você tentar cadastrar um cliente com um e-mail que já esteja cadastrado no banco de dados.

- **`should be able to create a new product`**: Para que esse teste passe, sua aplicação deve permitir que um produto seja criado, e retorne um json com o produto criado.

- **`should not be able to create a duplicated product`**: Para que esse teste passe, sua aplicação deve retornar um erro quando você tentar cadastrar um produto com um nome que já esteja cadastrado no banco de dados.

- **`should be able to create a new order`**: Para que esse teste passe, sua aplicação deve permitir que um pedido seja criado, e retorne um json com o todos os dados do pedido criado.

- **`should not be able to create an order with a invalid customer`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um cliente que não existe no banco de dados, retornando um erro.

- **`should not be able to create an order with invalid products`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um produtos que não existem no banco de dados, retornando um erro caso um ou mais dos produtos enviados não exista no banco de dados.

- **`should not be able to create an order with products with insufficient quantities`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um produtos que não possuem quantidade disponível, retornando um erro caso um ou mais dos produtos enviados não possua a quantidade necessária.

- **`should be able to subtract an product total quantity when it is ordered`**: Para que esse teste passe, sua aplicação deve permitir que, quando um novo pedido for criado, seja alterada a quantidade total dos produtos baseado na quantidade pedida.

- **`should be able to list one specific order`**: Para que esse teste passe, você deve permitir que a rota `orders/:id` retorne um pedido, contendo todas as informações do pedido com o relacionamento de `customer` e `order_products`.

## :cd: Pacotes instalados

A seguir segue uma lista dos pacotes instalados:

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

	Opcional
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme)

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
