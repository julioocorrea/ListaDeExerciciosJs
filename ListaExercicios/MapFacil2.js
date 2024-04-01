//2. Crie uma função que receba um array de palavras e retorne um novo array com cada palavra em maiúsculas usando map.

var palavras = ["julio", "amanda", "amelia"];

const palavrasMaiusculas = TransformaEmMaiuscula(palavras);

console.log(palavrasMaiusculas);

function TransformaEmMaiuscula(palavras) {
    return palavras.map(palavra => {
        return palavra.toUpperCase();
    });
}