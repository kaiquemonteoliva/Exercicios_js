// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.


const promptSync = require("prompt-sync")();


let diaDaSemana = parseInt(promptSync("Digite um numero de 1 a 7: "));

if( diaDaSemana == 1){
    console.log("O numero digitado representa Segunda feira")

    }else if( diaDaSemana == 2){
        console.log("O numero digitado representa Terca feira")
    }
    else if( diaDaSemana == 3){
        console.log("O numero digitado representa Quarta feira")
    }
    else if( diaDaSemana == 4){
        console.log("O numero digitado representa Quinta feira")
    }
    else if( diaDaSemana == 5){
        console.log("O numero digitado representa Sexta feira")
    }
    else if( diaDaSemana == 6){
        console.log("O numero digitado representa Sabado")
    }
    else{
        console.log("O numero digitado representa Domingo")
    }
    
    
    
    
   
    
