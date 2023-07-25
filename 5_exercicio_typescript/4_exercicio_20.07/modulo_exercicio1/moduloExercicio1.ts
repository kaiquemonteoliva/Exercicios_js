
import promptSync from "prompt-sync";
let prompt = promptSync();

export function exercicio1() {

    for (let index:number = 1; index <= 10; index++) {
        console.log(index)
    }

}

export function exercicio2() {

    for (let index:number = 0; index <= 10; index += 2) {
        console.log(index)
    }

}


export function exercicio3() {
    for (let index:number = 1; index <= 50; index += 2) {
        console.log(index)
    }

}


export function exercicio4() {





    let numero = parseInt(prompt("Digite um numero de 1 a 10: "))


    for (let index:number = 0; index <= 10; index++) {
        console.log(numero + " x " + index + " = " + (numero * index))
    }
}



export function exercicio5() {
    let numero1:number = 0
    let numero2:number = 1
    let soma:number;

    for (let contador:number = 1; contador <= 10; contador++) {
        soma = numero1 + numero2;
        numero1 = numero2;
        numero2 = soma;
        console.log(numero1);



        console.log("-----------------------------------")

    }
}


export function exercicio6() {
    let numero:number = 0
    while (numero < 20) {

        console.log(numero += 2)

    }
}