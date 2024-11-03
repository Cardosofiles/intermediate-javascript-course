// Objeto `user` com informações de um usuário
const user = {
  email: "cardosofiles@outlook.com", // Email do usuário
  age: 28, // Idade do usuário
  name: {
    // Objeto aninhado `name` contendo o primeiro nome e sobrenome do usuário
    first_name: "João", // Primeiro nome do usuário
    surname: "Batista", // Sobrenome do usuário
  },
  address: {
    // Objeto aninhado `address` contendo os detalhes de endereço do usuário
    street: "Rua SU1", // Rua do endereço do usuário
    number: 100, // Número da residência do usuário
    complement: "BL54 - APTO302", // Complemento do endereço do usuário
    city: "Uberlândia", // Cidade onde o usuário reside
    state: "MG", // Estado onde o usuário reside
  },
  message: function () {
    // Método para exibir uma mensagem de saudação ao usuário
    console.log(`Olá, ${this.name.first_name}`);
  },
};

// Acessa e exibe o primeiro nome do usuário
console.log(user.name.first_name);

// Acessa e exibe a cidade do usuário
console.log(user.address.city);

// Chama o método `message` para exibir a mensagem de saudação ao usuário
user.message();

// Objeto `product` com informações sobre um produto
const product = {
  name: "Notebook", // Nome do produto
  quantity: 90, // Quantidade em estoque
  price: 1200.0, // Preço do produto
  discount: 0.15, // Desconto aplicado ao produto (15%)
  category: "Computadores", // Categoria do produto
  description: "Notebook Acer Aspire 5", // Descrição do produto
  calculateDiscountedPrice: function () {
    // Método para calcular o preço com desconto
    return this.price * (1 - this.discount);
  },
};

// Atualiza a quantidade em estoque do produto
product.quantity = 55;

// Exibe a quantidade atualizada do produto
console.log(product.quantity);

// Exibe o preço do produto com desconto aplicado
console.log(
  `Preço com desconto: R$ ${product.calculateDiscountedPrice().toFixed(2)}`
);

// Exemplo adicional de objeto `order` para representar um pedido
const order = {
  orderId: 10123, // Identificação do pedido
  user, // Referência ao objeto `user` como cliente do pedido
  products: [
    // Array de objetos representando os produtos no pedido
    {
      name: "Notebook", // Nome do produto
      quantity: 1, // Quantidade do produto no pedido
      unitPrice: product.price, // Preço unitário do produto
    },
    {
      name: "Mouse", // Nome do segundo produto
      quantity: 2, // Quantidade do segundo produto no pedido
      unitPrice: 50.0, // Preço unitário do segundo produto
    },
  ],
  status: "Em processamento", // Status atual do pedido
  calculateTotalPrice: function () {
    // Método para calcular o total do pedido
    return this.products.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    );
  },
  updateStatus: function (newStatus) {
    // Método para atualizar o status do pedido
    this.status = newStatus;
  },
};

// Exibe o ID do pedido
console.log("ID do Pedido:", order.orderId);

// Calcula e exibe o total do pedido
console.log("Total do Pedido:", order.calculateTotalPrice());

// Atualiza e exibe o status do pedido
order.updateStatus("Enviado");
console.log("Status Atualizado:", order.status);

// Métodos JavaScript para manipular os objetos

// 1. Object.keys - obtém todas as chaves do objeto `user` e `product`
console.log("Chaves de 'user':", Object.keys(user));
console.log("Chaves de 'product':", Object.keys(product));

// 2. Object.values - obtém todos os valores do objeto `user` e `product`
console.log("Valores de 'user':", Object.values(user));
console.log("Valores de 'product':", Object.values(product));

// 3. Object.entries - retorna um array de pares chave-valor para `user` e `product`
console.log("Entries de 'user':", Object.entries(user));
console.log("Entries de 'product':", Object.entries(product));

// 4. Object.assign - copia as propriedades do objeto `user` para um novo objeto `userCopy`
const userCopy = Object.assign({}, user);
userCopy.name.first_name = "Carlos"; // Modifica o primeiro nome no objeto `userCopy`
console.log("User original:", user.name.first_name); // Exibe o primeiro nome original do usuário
console.log("User copiado:", userCopy.name.first_name); // Exibe o primeiro nome no objeto copiado

// 5. Object.freeze - congela o objeto `product`, impedindo alterações nas propriedades
const frozenProduct = Object.freeze(product);
frozenProduct.quantity = 100; // Tentativa de alterar a quantidade não terá efeito
console.log("Produto congelado:", frozenProduct.quantity);

// 6. Object.seal - permite alterar propriedades existentes no objeto `order`, mas impede novas adições
const sealedOrder = Object.seal(order);
sealedOrder.status = "Entregue"; // Alteração permitida, pois a propriedade já existe
sealedOrder.newField = "Test"; // Tentativa de adicionar uma nova propriedade não será bem-sucedida
console.log("Pedido selado:", sealedOrder.status); // Exibe o status atualizado do pedido
console.log("Campo não adicionado:", sealedOrder.newField); // Exibe `undefined` pois `newField` não foi adicionado
