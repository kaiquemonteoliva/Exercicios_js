const promptSync = require("prompt-sync")();

// Exercicio 3
// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

let numero = parseInt(promptSync("Digite um numero: "))

if(numero > 0 ){
    console.log(numero + " e positivo")
}else if(numero < 0){
    console.log(numero + " e negativo")
}else{
    console.log("O numero digitado e 0")

}