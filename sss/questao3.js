const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Número: "));

let i = 1;

while (i <= 10) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
    i++;
}

// for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i;
//     console.log(`${numero} x ${i} = ${resultado}`);
// }