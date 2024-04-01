//2. Escreva uma função que receba um array de strings e retorne um novo array com o comprimento de cada string usando map.

const Pessoas = [
    {
        nome: "Julio",
    },
    {
        nome: "Amanda",
    },
    {
        nome: "Amelia",
    }
];

const TamanhoNomes = RetornaTamanhoStrings(Pessoas);

console.log(TamanhoNomes);

function RetornaTamanhoStrings(Pessoas) {
    return Pessoas.map(Pessoa => {
        return {
            tamanhoNome: Pessoa.nome.length
        }
    });
};