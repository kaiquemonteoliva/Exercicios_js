// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

const promptSync = require("prompt-sync")();



let numero = parseInt(promptSync("Digite um numero de 1 a 10: "))


for(index = 0; index <= 10; index ++){
    console.log(numero +  " x " + index + " = " + (numero*index))
}