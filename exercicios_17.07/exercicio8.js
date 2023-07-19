// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

const promptSync = require("prompt-sync")();


let idade = parseInt(promptSync("Digite sua idade: "))

while(idade < 18){

 idade = parseInt(promptSync("Digite sua idade: "))




}


if(idade > 18){
    console.log("Voce atingiu a maior idade!!!!!")
}

