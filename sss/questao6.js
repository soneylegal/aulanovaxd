// Solicita ao usuário que insira um número
const prompt = require('prompt-sync')()
const numero = parseInt(prompt("Insira um número: "));

let soma = 0;
let numeroRestante = numero;

while (numeroRestante !== 0) {
    const digito = numeroRestante % 10
    soma += digito
    numeroRestante = Math.floor(numeroRestante / 10)
}

console.log(`A soma dos dígitos de ${numero} é: ${soma}`)
