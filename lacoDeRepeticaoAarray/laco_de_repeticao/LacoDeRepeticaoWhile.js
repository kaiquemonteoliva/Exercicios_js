const promptSync = require('prompt-sync')();

let saudacao = promptSync("Deseja ler um boa noite? ");

while(saudacao == "sim"){
    console.log("Boa noite!!!");
    saudacao = promptSync("Deseja ler um boa noite? ");

    
}

if(saudacao == "nao"){
    console.log("Entao tchau!!");
}

