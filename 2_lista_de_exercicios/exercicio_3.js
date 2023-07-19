// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

const promptSync = require("prompt-sync")();

let numero1 = parseInt(promptSync("Digite um numero: ")); 
let numero2 = parseInt(promptSync("Digite um numero: "));
let numero3 = parseInt(promptSync("Digite um numero: "));

// se 1 e menor que 2 && se 2 e menor que 3
// 1,2,3

// se 2 e menor que 3 && se 1 e menor que 3
// 1,2,3

// se 3 e menor que 1 && se 1 e menor que 2
// 3,1,2

// se 2 e menor 1 && 3 e menor que 1 
// 2,3,1 

// se 1 e menor que 3 && 3 e menor que 2
// 1,3,2

if( numero1 < numero2 && numero2 < numero3){
    console.log("a ordem crescente e: " + numero1 + "," + numero2 + "," + numero3)
    
}else if(numero2 < numero3 && numero1 < numero3){
    console.log("a ordem crescente e: " + numero2 + "," + numero1 + "," + numero3)
}else if(numero3 <= numero1 && numero1 <= numero2){
    console.log("a ordem crescente e: " + numero3 + "," + numero2 + "," + numero1)
}else if(numero2 <= numero1 && numero3 <= numero1){ 
    console.log("a ordem crescente e: " + numero2 + "," + numero3 + "," + numero1)
}else if(numero1 <= numero3 && numero3 <= numero2){
    console.log("a ordem crescente e: " + numero1 + "," + numero3 + "," + numero2)
}

   