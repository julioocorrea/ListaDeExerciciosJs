//2. Crie uma função que receba um array de números e use forEach para calcular e imprimir a soma de todos os elementos.

var numeros = [1,2,3,4,5];
ImprimirSoma(numeros);

function ImprimirSoma(numeros) {
    var soma = 0;

    numeros.forEach(numero => {
        soma+=numero;
    });

    console.log(soma);
}