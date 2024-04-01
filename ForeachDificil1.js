//1. Implemente uma função que receba uma matriz (array de arrays) e use forEach para calcular e imprimir a soma de cada linha da matriz.

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
]

ImprimirSomaLinhas(matriz);

function ImprimirSomaLinhas(matriz) {
    matriz.forEach(linha => {
        var soma = 0;
        linha.numeros.forEach(numero => {
            soma += numero;
        });
        console.log(soma);
    });
}