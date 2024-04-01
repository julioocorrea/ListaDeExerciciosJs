//2. Crie uma função que receba um array de strings e use forEach para imprimir cada string em maiúsculas.

var strings = ["julio", "amanda", "amelia"];

ImprimirMaiuscula(strings)

function ImprimirMaiuscula(strings) {
    strings.forEach(string => {
        console.log(string.toUpperCase());
    });
}