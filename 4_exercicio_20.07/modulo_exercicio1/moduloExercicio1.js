
import promptSync from "prompt-sync";
let prompt = promptSync();

export function exercicio1() {

    for (let index = 1; index <= 10; index++) {
        console.log(index)
    }

}

export function exercicio2() {

    for (let index = 0; index <= 10; index += 2) {
        console.log(index)
    }

}


export function exercicio3() {
    for (let index = 1; index <= 50; index += 2) {
        console.log(index)
    }

}


export function exercicio4() {





    let numero = parseInt(prompt("Digite um numero de 1 a 10: "))


    for (let index = 0; index <= 10; index++) {
        console.log(numero + " x " + index + " = " + (numero * index))
    }
}



export function exercicio5() {
    let numero1 = 0
    let numero2 = 1
    let soma;

    for (let contador = 1; contador <= 10; contador++) {
        soma = numero1 + numero2;
        numero1 = numero2;
        numero2 = soma;
        console.log(numero1);



        console.log("-----------------------------------")

    }
}


export function exercicio6() {
    let numero = 0
    while (numero < 20) {

        console.log(numero += 2)

    }
}