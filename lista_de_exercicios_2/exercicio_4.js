// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

const promptSync = require("prompt-sync")();

// 2023 - 1994


let dataNascimento = parseInt(promptSync("Digite o seu ano de nascimento: "))
let anoAtual = 2023;
let idade = anoAtual - dataNascimento;

if( idade >= 18 ){
    console.log("Voce tem " + idade + ", maior de idade" )
}else{
    console.log("Voce nao e maior de idade")
}