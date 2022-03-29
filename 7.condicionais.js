console.log(`Trabalhando com condicionais`);
// declarando um Array - construtor da lista

const listadeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`,
);

console.log(" *** Destinos Possíveis de viagens *** ")
console.log(listadeDestinos);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("O Comprador é maior de idade, pode comprar as passagem(ns) para o destino: " + listadeDestinos[1]);
    listadeDestinos.splice(1,1)

    console.log("Embarque: ");
    console.log("Boa viagem! \n\n ");

} else if (estaAcompanhada){
       console.log("O Comprador é menor de idade, porém está acompanhado e pode comprar a(s) passagem(ns) para o destino: " + listadeDestinos[1]);
       listadeDestinos.splice(1,1)
       console.log("Embarque: ");
       console.log("Boa viagem! \n\n ");
    } else {
        console.log("O comprador não é maior de idade, e não está companhado, com isso, a venda da(s) passagem(ns) não é permitida!")
        console.log("Embarque: ");
        console.log("Não pode embarcar! \n\n ");        
}

console.log(" *** Outros Destinos Possíveis de viagens *** ")
console.log(listadeDestinos);
