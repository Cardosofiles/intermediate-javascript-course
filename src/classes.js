/*
| Nome                | Exemplo                 | Usos Comuns                |
|---------------------|-------------------------|----------------------------|
| PascalCase          | MinhaVariavel           | Classes, tipos, namespaces |
| camelCase           | minhaVariavel           | Variáveis, funções         |
| snake_case          | minha_variavel          | Variáveis, funções (Python)|
| kebab-case          | minha-variavel          | CSS classes, URLs          |
| SCREAMING_SNAKE_CASE| MINHA_VARIAVEL          | Constantes                 |
| flatcase            | minhavarivel            | Pacotes, identificadores   |
*/

/* Exemplos de uso:
 * PascalCase: ClasseExemplo, NomeCompleto
 * camelCase: variavelExemplo, nomeCompleto
 * snake_case: variavel_exemplo, nome_completo
 * kebab-case: variavel-exemplo, nome-completo
 * SCREAMING_SNAKE_CASE: CONSTANTE_EXEMPLO, NOME_COMPLETO
 * flatcase: variavelexemplo, nomecompleto
 */

// Classe Book
// A classe `Book` representa um livro com um título e um status de publicação.
// - Propriedades:
//   - title: Armazena o título do livro.
//   - published: Indica se o livro foi publicado (booleano, padrão é `false`).
// - Métodos:
//   - publish(): Altera a propriedade `published` para `true`, indicando que o livro foi publicado.

class Book {
  constructor(title) {
    this.title = title; // Define o título do livro.
    this.published = false; // Indica que o livro não foi publicado inicialmente.
  }

  publish() {
    this.published = true; // Marca o livro como publicado.
  }
}

// Exemplo de uso da classe `Book`
const eragon = new Book("Eragon");
const eldest = new Book("Eldest");
eragon.publish(); // Publica o livro "Eragon"
console.log(eragon); // Exibe o objeto `eragon` com `published` como `true`
console.log(eldest); // Exibe o objeto `eldest` com `published` como `false`
console.log(eragon instanceof Book); // Verifica se `eragon` é uma instância da classe `Book`

// Classe User
// A classe `User` representa um usuário do sistema com informações de nome, email e senha.
// - Propriedades:
//   - fullname: Nome completo do usuário.
//   - email: Email do usuário.
//   - password: Senha do usuário.
// - Métodos:
//   - login(email, password): Verifica se o email e senha fornecidos coincidem com os do usuário.
//     Exibe uma mensagem de sucesso ou erro com base no resultado da verificação.

class User {
  constructor(fullname, email, password) {
    this.fullname = fullname; // Nome completo do usuário.
    this.email = email; // Email do usuário.
    this.password = password; // Senha do usuário.
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso."); // Login bem-sucedido
    } else {
      console.log("Falha ao fazer login! Email ou senha incorretos."); // Falha no login
    }
  }
}
// Exemplo de uso da classe `User`
const john = new User("John Doe", "john@email.com", "123456");
john.login("john@email.com", "123456"); // Tentativa de login bem-sucedida
john.login("john@email.com", "654321"); // Tentativa de login com senha incorreta

// Classe Product
// A classe `Product` representa um produto com informações de nome, descrição, preço e estoque.
// - Propriedades:
//   - name: Nome do produto.
//   - description: Descrição do produto.
//   - price: Preço do produto.
//   - inStock: Quantidade em estoque do produto (inicialmente zero).
// - Métodos:
//   - addToStock(quantity): Adiciona a quantidade especificada ao estoque.
//   - calculateDiscount(discount): Calcula o preço com desconto, baseado na porcentagem fornecida.
class Product {
  constructor(name, description, price) {
    this.name = name; // Nome do produto.
    this.description = description; // Descrição do produto.
    this.price = price; // Preço do produto.
    this.inStock = 0; // Quantidade inicial do produto em estoque.
  }

  addToStock(quantity) {
    this.inStock += quantity; // Adiciona a quantidade especificada ao estoque.
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100); // Retorna o preço após aplicar o desconto percentual.
  }
}
// Exemplo de uso da classe `Product`
const watch = new Product("Relógio de Pulso", "...", 80);
watch.addToStock(99); // Adiciona 99 unidades ao estoque do relógio
console.log(watch); // Exibe o objeto `watch` com a quantidade em estoque
console.log(watch.calculateDiscount(15)); // Calcula o preço com 15% de desconto
console.log(watch.calculateDiscount(10)); // Calcula o preço com 10% de desconto

/*
Análise:
- A classe `Book` permite criar objetos de livros, com título e status de publicação. 
  - É útil para manipular uma coleção de livros, permitindo publicar ou listar livros não publicados.
  
- A classe `User` permite criar um usuário com email e senha, e oferece uma função de login que simula autenticação básica.
  - Esse tipo de implementação é útil para sistemas de login e gerenciamento de usuários.
  
- A classe `Product` é voltada para representar produtos em um sistema de inventário.
  - Ela permite calcular o preço com desconto e atualizar o estoque, funções essenciais para aplicações de e-commerce.
*/
