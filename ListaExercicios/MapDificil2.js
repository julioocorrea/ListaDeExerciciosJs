//2. Implemente uma função que receba um array de números e retorne um novo array com a raiz quadrada de cada número, arredondada para o inteiro mais próximo, usando map.

const matriz = [
    { 
        numeros: [1,2,4,5] 
    },
    { 
        numeros: [2,4] 
    },
    { 
        numeros: [64,81,3] 
    }
];

const matrizAoQuadrado = retornaRaizQuadrada(matriz);

console.log(matrizAoQuadrado);

function retornaRaizQuadrada(matriz) {
    return matriz.map(elemento => {
        return elemento.numeros.map(numero => Math.round(Math.sqrt(numero)));
    });
}
