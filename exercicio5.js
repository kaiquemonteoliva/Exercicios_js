const promptSync = require("prompt-sync")();

// Exercicio 5
// Faça um programa que receba dois valores e imprima qual é o maior
// número digitado.

let numero1 = parseInt(promptSync("Digite um numero: "))
let numero2 = parseInt(promptSync("Digite outro numero: "))

if(numero1 > numero2){
    console.log(numero1 + " e maior que " + numero2)
}else if(numero2 > numero1){
    console.log(numero2 + " e maior que " + numero1)
}else{
    console.log("Numero invalido")
}