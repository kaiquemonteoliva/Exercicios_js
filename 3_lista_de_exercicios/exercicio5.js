let numero1 = 0
let numero2 = 1
let soma;

for(let contador = 1; contador <= 10; contador ++){
    soma = numero1 + numero2;
    numero1 = numero2;
    numero2 = soma;
    console.log(numero1);
    
    
    
    console.log("-----------------------------------")

}