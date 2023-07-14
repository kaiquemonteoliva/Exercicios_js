const promptSync = require("prompt-sync")();

// Exercicio 6
// Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota1 = parseFloat(promptSync("Digite a primeira nota: "));
let nota2 = parseFloat(promptSync("Digite a segunda nota: "));
let nota3 = parseFloat(promptSync("Digite a terceira nota:"));
let nota4 = parseFloat(promptSync("Digite a quarta nota:"));

let soma = nota1 + nota2 + nota3 + nota4;

let media = soma / 4;

console.log("Sua media e " + media )
if(media >= 7){
console.log("Aprovado")
}else if(media > 5 && media < 7){
    console.log("Recuperacao")
}else{
    console.log("Reprovado")
}
