// ESTRUTURAS CONDICIONAIS

// var jogador1 = 1;
// var jogador2 = 0;
// var placar;

// jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');

// // USANDO IF
// if (jogador1 > 0 && jogador2 == 0){
//     console.log('Jogador 1 marcou ponto!')
//     placar = jogador1 > jogador2;
// }

// // USANDO ELSE IF
// else if (jogador2 > 0 && jogador1 == 0) {
//     console.log('Jogador 2 marcou ponto!')
//     placar = jogador2 > jogador1;
// }

// // USANDO ELSE
// else {
//     console.log('ninguém marcou ponto')
// }

// switch (placar) {
//     case placar = jogador1 > jogador2:
//         console.log('Jogador 1 ganhou!');
//         break;
//     case placar = jogador2 > jogador1:
//         console.log('Jogador 2 ganhou!');
//         break;
//     default:
//         console.log('Ninguém ganhou')
// }

// ESTRUTURAS DE REPETIÇÃO

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
};

// FOR - Executa uma instrução até que ela seja falsa

// for (let indice = 0; indice < array.length; indice++) {
//     console.log(indice);
// }

// FOR / IN - Funciona como uma repetição a partir de uma propriedade

// for (let i in array) {
//     console.log(i);
// }

// // FOR / IN COM OBJECT

// for(i in object) {
//     console.log(i);
// }

// FOR/OF - Funciona como uma repetição a partir de um valor

// for (i of array) {
//     console.log(i);
// }

// FOR/OF COM OBJECT

// for (i of object.propriedade1) {
//     console.log(i);
// }

// WHILE - Executa uma instrução ENQUANTO ela for verdadeira

var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

// DO/WHILE - Executa uma instrução até que ela seja falsa. A verificação é feita depois da execução

do {
    a++;
    console.log(a);
} while (a < 10)