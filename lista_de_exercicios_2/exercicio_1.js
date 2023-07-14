// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

const promptSync = require("prompt-sync")();



let nomeDeUsuario = promptSync("Digite o nome de usuario: ");
let senha = promptSync("Digite sua senha: ");

if(nomeDeUsuario == "admin" && senha == "senha123"){
    console.log("Login efetuado com sucesso")
} else{
    console.log("Usuario ou senha incorreto")
}