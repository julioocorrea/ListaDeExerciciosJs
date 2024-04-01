//2. Escreva um programa que use forEach para iterar sobre um array de arrays de números e encontre o maior número em cada subarray, imprimindo-o.

const matriz2 = [
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

ImprimirMaior(matriz2);

function ImprimirMaior(matriz2) {
    matriz2.forEach(linha => {
        var maior = 0;
        linha.numeros.forEach(numero => {
            if (numero > maior) {
                maior = numero;
            }
        });
        console.log(maior);
    });
}
