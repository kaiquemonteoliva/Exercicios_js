const promptSync = require("prompt-sync")();



// Exercicio 4
// Faça um programa que receba um número do usuário e informe
// se este número é par ou ímpar.

let numero = parseInt(promptSync("Escreva um numero: "));

if(numero %2 == 0){
    console.log("Esse numero: " + numero + " e par");
} else{
    console.log("Esse numero: " + numero + " e impar")
}



