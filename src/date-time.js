// dateTimeFunctions.js

/**
 * Função para obter a data e hora atuais
 * @returns {Date} O objeto Date representando a data e hora atuais
 */
function getCurrentDateTime() {
  return new Date(); // Retorna um novo objeto Date com a data e hora atuais
}

/**
 * Função para formatar a data em uma string legível
 * @param {Date} date - O objeto Date a ser formatado
 * @returns {string} A data formatada como 'DD/MM/YYYY'
 */
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0"); // Obtém o dia e adiciona zero à esquerda se necessário
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Obtém o mês (0-11) e adiciona 1, depois zero à esquerda
  const year = date.getFullYear(); // Obtém o ano

  return `${day}/${month}/${year}`; // Retorna a data formatada
}

/**
 * Função para formatar a hora em uma string legível
 * @param {Date} date - O objeto Date a ser formatado
 * @returns {string} A hora formatada como 'HH:MM:SS'
 */
function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, "0"); // Obtém as horas e adiciona zero à esquerda se necessário
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Obtém os minutos
  const seconds = String(date.getSeconds()).padStart(2, "0"); // Obtém os segundos

  return `${hours}:${minutes}:${seconds}`; // Retorna a hora formatada
}

/**
 * Função para obter a data e a hora atuais formatadas
 * @returns {string} A data e a hora formatadas como 'DD/MM/YYYY HH:MM:SS'
 */
function getFormattedDateTime() {
  const now = getCurrentDateTime(); // Obtém a data e hora atuais
  return `${formatDate(now)} ${formatTime(now)}`; // Retorna a data e a hora formatadas
}

// Testando as funções
console.log("Data e Hora Atuais: ", getFormattedDateTime());
console.log("Data Atual: ", formatDate(getCurrentDateTime()));
console.log("Hora Atual: ", formatTime(getCurrentDateTime()));

// Exibe a data e hora atual
console.log(new Date());
// Exibe a data e hora de referência
console.log(new Date(0));
// Exibe o timestamp em milissegundos da data e hora de referência
console.log(new Date().getTime());

let toLocationString = new Date("2024-07-02T14:30:10");
console.log(toLocationString.toLocaleString());
console.log(toLocationString.toLocaleString("en"));

console.log(
  toLocationString.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    timeZoneName: "short",
  })
);

console.log(
  toLocationString.toLocaleString("pt-BR", {
    dateStyle: "medium",
  })
);
console.log(
  toLocationString.toLocaleString("pt-BR", {
    dateStyle: "short",
  })
);
console.log(
  toLocationString.toLocaleString("pt-BR", {
    dateStyle: "long",
  })
);
console.log(
  toLocationString.toLocaleString("pt-BR", {
    dateStyle: "full",
  })
);
console.log(
  toLocationString.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
);

const dateWithTimeZone = new Date();
console.log(dateWithTimeZone.toLocaleString());
