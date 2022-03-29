console.log("Trabalhando com atribuição de variáveis");

const idade = 51;

// let é uma variável de escopo local, ela pode mudar
const primeiroNome = "Rogério";
const sobrenome = "Barreto Martins";


console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);

// interpolação de variáveis
console.log(`Meu nome é: ${primeiroNome} ${sobrenome}`);

nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);