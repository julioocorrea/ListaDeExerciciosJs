//1. Escreva uma função que receba um array de números e retorne um novo array com cada número multiplicado por 2 usando map.
var numeros = [1,2,3,4,5];

const numerosMultiplicados = MultiplicaPor2(numeros);

console.log(numerosMultiplicados);

function MultiplicaPor2(numeros) {
    return numeros.map(numero => {
        return numero * 2;
    });
}
