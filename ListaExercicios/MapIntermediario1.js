//1. Implemente uma função que receba um array de objetos e retorne um novo array apenas com os valores de uma propriedade específica de cada objeto, usando map.

const produtos = [
    {
        nome: "celular",
        preco: 1900.99
    },
    {
        nome: "notebook",
        preco: 5000.00
    }
];

const NomesProdutos = RetornaPropriedade(produtos);

console.log(NomesProdutos);

function RetornaPropriedade(produtos) {
    return produtos.map(produto => {
        return {
            nome: produto.nome
        }
    });
};