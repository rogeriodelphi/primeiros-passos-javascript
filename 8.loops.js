console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Curitiba";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar  = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false
while(contador<listaDeDestinos.length){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    } 
    contador += 1;
}
console.log("Destino existe: " + destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!")
}else {
    console.log("Desculpe tivemos um erro!")
}

for (let cont =0 ; cont < listaDeDestinos.length; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        // break;
    } 
    cont += 1;
}



