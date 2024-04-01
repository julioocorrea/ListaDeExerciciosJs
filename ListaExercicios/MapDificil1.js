//1. Crie uma função que receba uma matriz (array de arrays) e retorne um novo array com a soma de cada linha da matriz, usando map.

const matriz = [
    { 
        numeros: [1,2,3,4,5] 
    },
    { 
        numeros: [1,2,3,4] 
    },
    { 
        numeros: [1,2,3] 
    }
];

const matrizSomada = retornaSoma(matriz);

console.log(matrizSomada);

function retornaSoma(matriz) {
    return matriz.map(elemento => {
        let soma = 0;
        elemento.numeros.forEach(numero => {
            soma += numero;
        });
        return soma;
    });
}