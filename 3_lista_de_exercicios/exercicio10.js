// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

const PromptSync = require("prompt-sync")();

let numero = parseInt(PromptSync("Digite um numero: "))

while( numero != 0){
    numero = parseInt(PromptSync("Digite um numero: "))

}

if( numero == 0){
    console.log("O numero digitado e igual a 0")

}