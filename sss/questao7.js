const prompt = require('prompt-sync')();
/**Solicite ao usuário que insira uma frase e use um loop while para
contar e imprimir o número de vogais na frase. */


const frase = prompt("Frase: ");

const fraseEmMinusculas = frase.toLowerCase();

let contadorVogais = 0
let indice = 0

while (indice < fraseEmMinusculas.length) {
    let caractere = fraseEmMinusculas[indice];
    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        contadorVogais++;
    }
    indice++;
}

console.log(`O número de vogais na frase é: ${contadorVogais}`);
