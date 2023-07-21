import PromptSync from "prompt-sync";
import { exercicio1, exercicio2, exercicio3, exercicio4, exercicio5, exercicio6 } from "./modulo_exercicio1/moduloExercicio1.js";
let prompt = PromptSync()


let pergunta;


do {

    pergunta = (prompt("Digite um numero de 1 a 6 que corresponde a um exercicio : "))

    switch (pergunta) {
        case "1":
            console.log("Voce escolheu o exercicio 1")
            exercicio1();

            break;

        case "2":
            console.log("Voce escolheu o exercicio 2");
            exercicio2();

            break;

        case "3":
            console.log("Voce escolheu o exercicio 3");
            exercicio3();

            break;

        case "4":
            console.log("Voce escolheu o exercicio 4");
            exercicio4();

            break;

        case "5":
            console.log("Voce escolheu o exercicio 5");
            exercicio5();

            break;

        case "6":
            console.log("Voce escolheu o exercicio 6");
            exercicio6();

            break;

        default:
            console.log("Voce saiu do programa");
            break;
    }

} while (pergunta != "sair");
