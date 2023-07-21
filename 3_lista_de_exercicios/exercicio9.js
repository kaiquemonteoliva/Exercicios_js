// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

const PromptSync = require("prompt-sync")();

let numero = parseInt(PromptSync("Digite um numero: "))

while( numero > 0){
    process.stdout.write(`${numero},`);

    numero--
    

}
