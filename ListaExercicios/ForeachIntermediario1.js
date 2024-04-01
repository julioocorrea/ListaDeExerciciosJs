//1. Escreva um programa que use forEach para iterar sobre um array de objetos e imprima o valor de uma propriedade específica de cada objeto.

const pessoas = [
    {
        nome: "Julio",
        idade: 21
    },
    {
        nome: "José",
        idade: 43
    },
    {
        nome: "Joaquim",
        idade: 82
    }
]

pessoas.forEach(pessoa => {
    console.log(pessoa.nome)
});