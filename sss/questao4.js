const prompt = require('prompt-sync')()
let numero = parseInt(prompt("Insira o número para calcular o fatorial: "))

let fatorial = 1

for (let i = 1; i <= numero; i++) {
    fatorial *= i
}

console.log(`O fatorial de ${numero} é ${fatorial}`);