// Exemplo inicial
let frase = "Aprender JavaScript é essencial para o desenvolvimento web.";
console.log(frase); // Exibe a string completa
console.log(frase.startsWith("Aprender")); // Verifica se a string começa com "Aprender". Saída: true
console.log(frase.endsWith("web.")); // Verifica se a string termina com "web.". Saída: true
console.log(frase.repeat(2)); // Repete a string duas vezes. Saída: "Aprender JavaScript é essencial para o desenvolvimento web.Aprender JavaScript é essencial para o desenvolvimento web."
console.log(frase.charAt(10)); // Retorna o caractere na posição 10. Saída: "J"
console.log(frase.charCodeAt(10)); // Retorna o código ASCII do caractere na posição 10. Saída: 74 (ASCII para "J")
console.log(frase.substring(9, 19)); // Retorna uma parte da string entre as posições 9 e 19. Saída: "JavaScript"
console.log(frase.search("JavaScript")); // Retorna a posição inicial de "JavaScript" na string. Saída: 9
console.log(frase.replace(/JavaScript/gi, "TypeScript")); // Substitui todas as ocorrências de "JavaScript" por "TypeScript", ignorando maiúsculas e minúsculas. Saída: "Aprender TypeScript é essencial para o desenvolvimento web."
console.log(frase.toLocaleLowerCase()); // Retorna toda a frase minúscula
console.log(frase.toUpperCase()); // Retorna toda a frase maiúscula

console.log(
  "-----------------------------------------------------------------"
);

// Manipulação de senhas
let senha = "passw";
if (senha.length < 8) {
  console.log("A senha deve conter no mínimo 8 caracteres."); // Verifica se a senha tem pelo menos 8 caracteres
} else if (!senha.match(/[A-Z]/g)) {
  console.log("A senha deve conter pelo menos uma letra maiúscula."); // Verifica se a senha contém pelo menos uma letra maiúscula
} else if (!senha.match(/[0-9]/g)) {
  console.log("A senha deve conter pelo menos um número."); // Verifica se a senha contém pelo menos um número
}

console.log(
  "-----------------------------------------------------------------"
);

// Formatação de dados
let telefone = "11987654321";
let telefoneFormatado = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // Aplica uma máscara de formato para um número de telefone
console.log(telefoneFormatado); // Saída formatada: (11) 98765-4321

console.log(
  "-----------------------------------------------------------------"
);

// Manipulando números em strings
let valorProduto = "799.90";
let valorComCifrao = "R$ " + parseFloat(valorProduto).toLocaleString("pt-BR"); // Converte a string para um número com formatação monetária brasileira
console.log(valorComCifrao); // Saída: R$ 799,90

console.log(
  "-----------------------------------------------------------------"
);

// Extraindo e formatando dados de strings
let dadosUsuario = "Nome: João, Idade: 28, Cidade: Uberlândia";
let dadosArray = dadosUsuario.split(", "); // Divide a string em um array, separando por ", "
console.log(dadosArray); // Saída: ["Nome: João", "Idade: 28", "Cidade: Uberlândia"]

// Extrai os valores de cada informação do usuário, removendo as labels
let dadosFormatados = dadosArray.map((item) => item.split(": ")[1]);
console.log(dadosFormatados); // Saída: ["João", "28", "Uberlândia"]

console.log(
  "-----------------------------------------------------------------"
);

// Substituindo caracteres especiais
let textoEspecial = "Olá! Como vai você? Espero que esteja tudo bem :)";
console.log(textoEspecial); // Saída original: "Olá! Como vai você? Espero que esteja tudo bem :)"

// Remove todos os caracteres especiais, deixando apenas letras, números e espaços
let textoLimpo = textoEspecial.replace(/[^\w\s]/gi, "");
console.log(textoLimpo); // Saída limpa: "Olá Como vai você Espero que esteja tudo bem"
