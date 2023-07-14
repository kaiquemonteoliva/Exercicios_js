const promptSync = require("prompt-sync")();

// Exercicio 2
// Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.

let nome = promptSync("Digite seu nome: ")
let salario = parseInt(promptSync("Digite seu salario: "))

if(salario < 500){
    console.log(nome + " seu salario foi reajustado, agora seu salario e R$" + (salario * 1.3));
} else{
    console.log(nome + " voce nao tem direito ao reajuste");
}