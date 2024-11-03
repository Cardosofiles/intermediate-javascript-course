// Criação de um novo array vazio
const newArray = new Array();
console.log(newArray); // Saída: []

// Exemplos de arrays em JavaScript
// Array de números
let numbers = [1, 2, 3, 4, 5];
// Array de strings
let strings = ["apple", "banana", "cherry"];
// Array misto contendo números, strings, booleanos e valores nulos/indefinidos
let mixedArray = [1, "two", 3.14, true, null, undefined];

// Exibindo os arrays no console
console.log(numbers); // Saída: [1, 2, 3, 4, 5]
console.log(strings); // Saída: ["apple", "banana", "cherry"]
console.log(mixedArray); // Saída: [1, "two", 3.14, true, null, undefined]

console.log(
  "-----------------------------------------------------------------"
);

// Adicionando elementos ao final dos arrays usando push()
numbers.push(6); // Adiciona 6 ao array de números
strings.push("date"); // Adiciona "date" ao array de strings
mixedArray.push(false); // Adiciona false ao array misto

// Exibindo os arrays após adição
console.log(numbers); // Saída: [1, 2, 3, 4, 5, 6]
console.log(strings); // Saída: ["apple", "banana", "cherry", "date"]

console.log(
  "-----------------------------------------------------------------"
);

// Acessando e alterando elementos do array
console.log(numbers[2]); // Acessa o terceiro elemento, Saída: 3
numbers[2] = 7; // Altera o terceiro elemento para 7
console.log(numbers); // Saída: [1, 2, 7, 4, 5, 6]

console.log(
  "-----------------------------------------------------------------"
);

// Iterando sobre os elementos do array com um loop for
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // Exibe cada elemento do array de números
}

// Utilizando forEach para iterar sobre os elementos do array
numbers.forEach((number) => {
  console.log(number); // Exibe cada número
});

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando map para transformar os elementos do array
const doubledNumbers = numbers.map((number) => number * 2); // Multiplica cada elemento por 2
console.log(doubledNumbers); // Saída: [2, 4, 14, 8, 10, 12]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando filter para filtrar elementos do array
const evenNumbers = numbers.filter((number) => number % 2 === 0); // Filtra números pares
console.log(evenNumbers); // Saída: [2, 4, 6]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando reduce para calcular a soma de todos os elementos do array
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue, // Soma os elementos
  0 // Valor inicial
);
console.log(sum); // Saída: 40

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando spread operator para concatenar arrays
const combinedArray = [...numbers, ...strings]; // Combina arrays de números e strings
console.log(combinedArray); // Saída: [1, 2, 7, 4, 5, 6, "apple", "banana", "cherry"]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando concat para concatenar arrays
const concatenatedArray = numbers.concat(strings); // Concatena arrays
console.log(concatenatedArray); // Saída: [1, 2, 7, 4, 5, 6, "apple", "banana", "cherry"]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando includes para verificar se um elemento existe no array
console.log(numbers.includes(5)); // Saída: true
console.log(numbers.includes(10)); // Saída: false

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando indexOf para encontrar a posição de um elemento no array
console.log(numbers.indexOf(5)); // Saída: 4
console.log(numbers.indexOf(10)); // Saída: -1 (não encontrado)

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando slice para cortar partes do array
const slicedArray = numbers.slice(1, 4); // Corta do índice 1 ao 4 (não incluído)
console.log(slicedArray); // Saída: [2, 7, 4]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando splice para adicionar novos elementos no array
numbers.splice(2, 0, 8, 9); // Adiciona 8 e 9 na posição 2, sem remover elementos
console.log(numbers); // Saída: [1, 2, 8, 9, 7, 4, 5, 6]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando splice para remover elementos do array
numbers.splice(5, 2); // Remove 2 elementos a partir do índice 5
console.log(numbers); // Saída: [1, 2, 8, 9, 7]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando reverse para inverter a ordem dos elementos do array
numbers.reverse(); // Inverte a ordem dos elementos
console.log(numbers); // Saída: [7, 9, 8, 2, 1]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando sort para ordenar os elementos do array
numbers.sort((a, b) => a - b); // Ordena os números em ordem crescente
console.log(numbers); // Saída: [1, 2, 7, 8, 9]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando join para transformar o array em uma string
const joinedString = numbers.join(", "); // Converte o array em uma string
console.log(joinedString); // Saída: "1, 2, 7, 8, 9"

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando shift para remover e retornar o primeiro elemento do array
const firstElement = numbers.shift(); // Remove o primeiro elemento e o retorna
console.log(numbers); // Saída: [2, 7, 8, 9]
console.log(firstElement); // Saída: 1

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando unshift para adicionar novos elementos no início do array
numbers.unshift(0); // Adiciona 0 no início do array
console.log(numbers); // Saída: [0, 2, 7, 8, 9]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando pop para remover e retornar o último elemento do array
const lastElement = numbers.pop(); // Remove o último elemento e o retorna
console.log(numbers); // Saída: [0, 2, 7, 8]
console.log(lastElement); // Saída: 9

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando splice para remover e retornar vários elementos do array
const removedElements = numbers.splice(1, 2); // Remove 2 elementos a partir do índice 1
console.log(numbers); // Saída: [0, 8]
console.log(removedElements); // Saída: [2, 7]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando slice e splice para fazer cópias do array
const copiedArray = [...numbers]; // Cria uma cópia do array
console.log(copiedArray); // Saída: [0, 8]
const slicedCopiedArray = numbers.slice(); // Faz uma cópia utilizando slice
console.log(slicedCopiedArray); // Saída: [0, 8]
const splicedCopiedArray = numbers.splice(0); // Remove todos os elementos do array original
console.log(splicedCopiedArray); // Saída: [0, 8]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando map para transformar cada elemento do array
const transformedArray = numbers.map((number) => number * 2); // Multiplica cada elemento por 2
console.log(transformedArray); // Saída: [0, 16]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando filter para filtrar os elementos do array
const filteredArray = numbers.filter((number) => number % 2 === 0); // Filtra números pares
console.log(filteredArray); // Saída: [0]

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando reduce para calcular a soma de todos os elementos do array
const sum1 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue, // Soma os elementos
  0 // Valor inicial
);
console.log(sum1); // Saída: 8

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando every para verificar se todos os elementos do array satisfazem uma condição
const allEven = numbers.every((number) => number % 2 === 0); // Verifica se todos são pares
console.log(allEven); // Saída: true

console.log(
  "-----------------------------------------------------------------"
);

// Utilizando some para verificar se algum elemento do array satisfaz uma condição
const someEven = numbers.some((number) => number % 2 === 0); // Verifica se há pelo menos um par
console.log(someEven); // Saída: true

console.log(
  "-----------------------------------------------------------------"
);
