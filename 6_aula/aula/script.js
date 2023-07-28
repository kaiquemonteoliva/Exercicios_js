//ok 1. pegar os valores 
//ok 2. calcular o imc -> valorImc
//ok 3. gerar a calssificacao imc -> classificacaoImc 
//ok 4. organizar os dados do usuario para salvar na lista e gerar a data de cadastro 
//ok 5. inserir o usuario na lista(salvar no localStorage) 
//ok 6. Funcao para carregar os usuarios(localStorage), ao carregar a pagina, chamar funcao
//ok 7. renderizar o conteudo da lista no formato da tabela de usuarios
//ok 8. botao para limpar os registro(localStorage)
function calcular (event){
    event.preventDefault();
    let usuario = receberValores();
    let imcCalculado = calcularImc(usuario.altura, usuario.peso);
    let classificacaoImc = classificarImc(imcCalculado)
    console.log(classificacaoImc)
    usuario = organizarDados(usuario,imcCalculado,classificacaoImc)
    cadastrarUsuario(usuario)
    window.location.reload()
    

}

function receberValores(){
    let nomeRecebido = document.getElementById("nome").value.trim();
    let alturaRecebida = document.getElementById("altura").value.trim();
    let pesoRecebido = document.getElementById("peso").value.trim();

    let dadosUsuario = {
       nome: nomeRecebido,
       altura: alturaRecebida,
       peso: pesoRecebido, 
    }
    console.log(dadosUsuario);
    return dadosUsuario;
    
}


function calcularImc(altura, peso){
    let imc = peso / (altura * altura)

    console.log(imc);
    return imc
}


function classificarImc(imc){
    


if(imc < 18.5){
    return "IMC menor que 18.5: Abaixo do peso"
}else if(imc >= 18.5 && imc <= 24.9){
    return "IMC de 18.5 a 24.9: Peso normal"
}else if(imc >= 25.0 && imc <= 29.0){
    return "IMC de 25.0 a 29.9: Sobrepeso"
}else if(imc >= 30.0 && imc <= 34.0){
    return "IMC de 30.0 a 34.9: Obesidade grau 1"
}else if(imc >= 35.0 && imc <= 39.0){
    return "IMC de 35.0 a 39.9: Obesidade grau 2"
}
}

function organizarDados(dadosUsuario, valorImc, classificacaoImc){
    let dataHoraAtual = new Intl.DateTimeFormat("pt-BR",{timeStyle:"long", dateStyle:"short"}).format(Date.now())

    console.log(dataHoraAtual)

    let dadosUsuarioAtualizado = {
        ...dadosUsuario,//declaracao bred
        imc: valorImc,
        situacaoImc: classificacaoImc,
        dataCadastro: dataHoraAtual
    }

    return dadosUsuarioAtualizado;

}


function cadastrarUsuario(dadosUsuario){
    let listaUsuarios = []

    if(localStorage.getItem("usuariosCadastrado") != null){
        listaUsuarios = JSON.parse (localStorage.getItem("usuariosCadastrado"))
    }

    listaUsuarios.push(dadosUsuario)
    //Salvar a lista de usuarios no localstorage
    //                         Chave                         Valor
    localStorage.setItem("usuariosCadastrado", JSON.stringify(listaUsuarios))



}


function carregarUsuarios(){
    let listaCarregada = []
    // Chave e valor 
    if(localStorage.getItem("usuariosCadastrado") != null){
        listaCarregada = JSON.parse(localStorage.getItem("usuariosCadastrado"))

    }

    if(listaCarregada.length == 0) {
        //Se nao tiver nenhum usuario cadastrado, mostrar mensagem
        let tabela = document.getElementById("corpo-tabela")
        // html interno - trata o html interno
        tabela.innerHTML = `<tr class = "linha-mensagem">
        <td colspan="6">Nenhum usuario cadastrado 😞 </td>
        </tr>`
    }else {
        //montar o conteudo da tabela 
        montarTabela(listaCarregada)
    }

    console.log(listaCarregada)
}

//na janela ele escuta eventos
window.addEventListener("DOMContentLoaded", () => carregarUsuarios())


function montarTabela(listaUsuarios){
    let tabela = document.getElementById("corpo-tabela")
    let template = ""

    listaUsuarios.forEach(usuario => {
        // console.log("O usuario e: ", usuario)
        template += `<tr>
        <td data-cell="nome">${usuario.nome}</td>
        <td data-cell="altura">${usuario.altura}</td>
        <td data-cell="peso">${usuario.peso}</td>
        <td data-cell="valor do IMC">${usuario.imc.toFixed(2)}</td>
        <td data-cell="classificação do IMC">${usuario.situacaoImc}</td>
        <td data-cell="data de cadastro">${usuario.dataCadastro}</td>
    </tr>`
    });

    tabela.innerHTML = template

}


function deletarRegistros(){
    localStorage.removeItem("usuariosCadastrado")
    window.location.reload()

}