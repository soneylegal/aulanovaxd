/**Soma dos Primeiros Números Ímpares (While):
a. Crie um programa que calcule a soma dos primeiros 10 números */

let soma = 0
let contador = 1

while (contador <= 10) {
    if (contador % 2 !== 0) {
        soma += contador;
    }
    contador++
}

console.log(`A soam dos primeiros 10 números ímpares é: ${soma}`)