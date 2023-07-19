

const promptSync = require("prompt-sync")();



// Exercicio 1
// Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.



let nome = promptSync("Digite seu nome: ");
let cargo = promptSync("Digite seu cargo: ");
let salario = parseInt(promptSync("Digite seu salario: "));


if( salario < 1000){
    console.log("O Funcionario: " + nome +", no cargo: " + cargo + ", Recebe: R$" + (salario * 1.1).toFixed(2))
}
