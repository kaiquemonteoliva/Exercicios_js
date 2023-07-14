// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

const promptSync = require("prompt-sync")();

let valorCompra = parseFloat(promptSync("Digite o valor da compra: "));
let desconto10 = (valorCompra * 1.1) - valorCompra
let desconto20 = (valorCompra * 1.2) - valorCompra
let desconto_dez = valorCompra - desconto10


if( valorCompra > 100.01 && valorCompra < 200.00){
    console.log("Sua compra recebeu desconto de 10% " + desconto_dez.toFixed(2) )
}else if(valorCompra > 200.00){
    console.log("Sua compra recebeu desconto de 20% " + desconto20.toFixed(2) )
}else{
    console.log("Voce nao tem direito ao desconto")
}
