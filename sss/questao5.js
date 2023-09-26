/**Peça ao usuário para inserir o número de notas e, em seguida,
solicite essas notas. Calcule a média das notas usando um loop
for. */
const prompt = require("prompt-sync")()
const numeroDeNotas = parseInt(prompt("Insira o número de notas que deseja calcular a média: "))

let soma = 0

for (let i = 1; i <= numeroDeNotas; i++) {
    let nota = parseFloat(prompt(`Insira a nota ${i}: `))
    soma += nota
}
const media = soma / numeroDeNotas
console.log(`A média das ${numeroDeNotas} notas é: ${media.toFixed(2)}`)

//pior que é