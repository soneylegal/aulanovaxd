//é o chat gpt não tem jeito
const prompt = require('prompt-sync')()
// Solicita ao usuário que insira um CPF
const cpf = prompt("Insira um CPF (apenas números):");

// Remove qualquer caractere não numérico do CPF
const cpfNumerico = cpf.replace(/\D/g, '');

// Verifica se o CPF tem 11 dígitos numéricos
if (cpfNumerico.length !== 11) {
    console.log("CPF inválido. O CPF deve conter 11 dígitos numéricos.");
} else {
    // Verifica se todos os dígitos do CPF são iguais
    const todosDigitosIguais = /^(.)\1+$/.test(cpfNumerico);

    if (todosDigitosIguais) {
        console.log("CPF inválido. Todos os dígitos são iguais.");
    } else {
        // Calcula os dígitos verificadores
        const cpfArray = cpfNumerico.split('').map(Number);
        const digito1 = calcularDigitoVerificador(cpfArray.slice(0, 9));
        const digito2 = calcularDigitoVerificador(cpfArray.slice(0, 9).concat(digito1));

        // Verifica se os dígitos verificadores calculados são iguais aos do CPF
        if (digito1 === cpfArray[9] && digito2 === cpfArray[10]) {
            console.log("CPF válido.");
        } else {
            console.log("CPF inválido.");
        }
    }
}

// Função para calcular um dígito verificador do CPF
function calcularDigitoVerificador(cpfArray) {
    let soma = 0;
    let peso = 10;

    for (let i = 0; i < cpfArray.length; i++) {
        soma += cpfArray[i] * peso;
        peso--;
    }

    const resto = soma % 11;
    const digito = (resto < 2) ? 0 : (11 - resto);

    return digito;
}
