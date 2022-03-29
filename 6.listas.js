console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;	
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// declarando um Array - construtor da lista
const listadeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`,
);

// adicionar itens na lista fora do construtor da lista
listadeDestinos.push(`Curitiba`);

console.log(" *** Destinos Possíveis *** ")
console.log(listadeDestinos);

// deletar a partir da posição 1, apenas 1 item  
listadeDestinos.splice(1,1)
console.log(listadeDestinos);

//listar o segundo item da lista
console.log(listadeDestinos[2]); 

//listar o primeiro e segundo item da lista
console.log(listadeDestinos[0], listadeDestinos[1]);
