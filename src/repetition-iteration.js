console.log("Exemplos de estruturas de repetição do JavaScript");

console.log("Loop For");
// 1. Loop for - Contando de 1 a 5
// O loop `for` é utilizado quando sabemos de antemão o número de vezes que queremos repetir um bloco de código.
// Neste exemplo, o loop `for` conta de 1 a 5.
console.log("Contando de 1 a 5");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Tabuada do 7");
let number = 7;
for (i = 0; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log("----------------------------------------------------------------");

console.log("Loof While");
// 2. Loop while - Contando de 5 a 1
// O loop `while` é utilizado quando não sabemos o número exato de iterações, mas sabemos a condição que determina o fim do loop.
// Neste exemplo, o `while` é usado para contar de 5 a 1.
console.log("Contando de 5 a 1");
let counter = 5;
while (counter > 0) {
  console.log(counter);
  counter--;
}

console.log("----------------------------------------------------------------");

console.log("Loop do...while");
// 3. Loop do...while - Executando ao menos uma vez
// O loop `do...while` garante que o bloco seja executado ao menos uma vez antes da verificação da condição,
// pois a condição é avaliada após a execução do bloco.
console.log("Executando ao menos uma vez");
let num = 10;
do {
  console.log(num);
  num--;
} while (num > 8);

console.log("----------------------------------------------------------------");

console.log("Loop for ...of");
// 4. Loop for...of - Iterando sobre um array
// O loop `for...of` é utilizado para iterar diretamente sobre os valores de objetos iteráveis, como arrays.
// Neste exemplo, ele é usado para iterar sobre um array de cores.
console.log("Iterando sobre um array de cores");
const colors = ["Vermelho", "Verde", "Azul"];
for (const color of colors) {
  console.log(color);
}

console.log("----------------------------------------------------------------");

console.log("Loop for ...in");
// 5. Loop for...in - Iterando sobre as propriedades de um objeto
// O loop `for...in` é usado para iterar sobre as propriedades enumeráveis de um objeto, acessando suas chaves e valores.
console.log("Iterando sobre as propriedades de um objeto");
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
for (const property in car) {
  console.log(property + ": " + car[property]);
}

console.log("Iterando sobre as propriedades de um objeto");
let person = {
  name: "João Batista",
  age: 28,
  city: "Uberlândia",
  country: "Brasil",
  email: "cardosofiles@outlook.com",
  boyfriend: "Edimar Pires Godoi Miranda",
};
for (const property in person) {
  console.log(property + ": " + person[property]);
}

/*
Análise

- Variabilidade de Estruturas: Cada estrutura de repetição possui uma aplicação específica:
  - `for` é ideal para loops com contagem controlada.
  - `while` e `do...while` são úteis quando o número de iterações depende de uma condição.
  - `for...of` é preferível para iterar sobre arrays e outros iteráveis.
  - `for...in` é ótimo para percorrer as propriedades de um objeto.

- Leitura e Manutenção: Esses loops fornecem flexibilidade e legibilidade, permitindo que o código seja mais expressivo e adequado ao tipo de dados iterado.

- Eficiência: Ao escolher a estrutura certa para cada contexto, é possível escrever loops eficientes e fáceis de entender.
*/
