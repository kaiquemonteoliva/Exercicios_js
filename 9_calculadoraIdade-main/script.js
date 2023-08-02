// 1. Pegar os valores
// 2. Calcular a Idade
//       a. Com base no ano
//       b. Com mês (EXTRA)
//       c. Com dia (EXTRA)

// 3. Gerar a faixa etária
   
//     Resultado            Faixa
//     0 à 12                Criança
//     13 à 17                Adolescente
//     18 à 65               Adulto
//     Acima de 65         Idoso
   

// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;

function calcular(event){
    event.preventDefault();
    let usuario = recebervalores(); //O que vai dentro dos parenteses da funcao [sao parametros ou argumentos]
   let idadeCalculada = calcularIdade(usuario.ano);
   let faixaDeIdade = faixaEtaria(idadeCalculada);
   console.log(faixaDeIdade);
   usuario = organizarDados(usuario, idadeCalculada, faixaDeIdade);
   cadastrarUsuario(usuario);
   window.location.reload()
}


//Passo 1
function recebervalores(){ //.value pega o valor do imput
    let nomeRecebido = document.getElementById("nome").value
    let diaRecebido = document.getElementById("dia-nascimento").value
    let mesRecebido = document.getElementById("mes-nascimento").value
    let anoRecebido = document.getElementById("ano-nascimento").value

    let dadosUsuario = {
        //o que sao passados antes dos : sao chamados de propriedades
        nome: nomeRecebido,
        dia: diaRecebido,
        mes: mesRecebido,
        ano: anoRecebido,
    }

    console.log(dadosUsuario)
    return dadosUsuario




}

//Passo 2
function calcularIdade(anoRecebido){
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear()
    let idade = anoAtual - anoRecebido;

    console.log(idade)
    return idade

}

//Passo 3
function faixaEtaria(idade){
//     Resultado            Faixa
//     0 à 12                Criança
//     13 à 17                Adolescente
//     18 à 65               Adulto
//     Acima de 65         Idoso


if(idade >= 0 && idade < 12){
    return "Crianca"
}else if(idade >= 13 && idade <= 17){
    return "Adolecente"
}else if(idade >= 18 && idade <= 65){
    return "Adulto"
}else if(idade > 65 ){
    return "Idoso"
}
    
}

//4. Organizar o objeto pessoa para salvar na lista

function organizarDados(dadosUsuario, calculoIdade, faixaEtariaDeidade){

    let dadosAtualizados = {
        ...dadosUsuario,
        idade: calculoIdade,
        faixaEtaria: faixaEtariaDeidade,

    }

    return dadosAtualizados;
}


//5. Cadastrar a pessoa na lista


function cadastrarUsuario (dadosUsuario){
    let listaUsuario = []

    if(localStorage.getItem("usuarioCadastrado") != null){
        listaUsuario = JSON.parse(localStorage.getItem("usuarioCadastrado"))

    }

    listaUsuario.push(dadosUsuario)

    localStorage.setItem("usuarioCadastrado", JSON.stringify(listaUsuario))
}

//6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página


function carregamentoUsuario(){
    let carregamentoLista = []

    if(localStorage.getItem("usuarioCadastrado") != null){
        carregamentoLista = JSON.parse(localStorage.getItem("usuarioCadastrado"))
    }

    if(carregamentoLista.length == 0){
        let tabela = document.getElementById("corpo-tabela")
        tabela.innerHTML = `<tr class = "linha-mensagem">
        <td colspan="6">Nenhum usuario cadastrado 😞 </td>
        </tr>`
    }else{
        montarTabela(carregamentoLista)
    }

    console.log(carregamentoLista)
}


window.addEventListener("DOMContentLoaded", () => carregamentoUsuario())


function montarTabela (listaDeCarregamento){
    let tabela = document.getElementById("corpo-tabela")
    let template = ""

    listaDeCarregamento.forEach(usuario => {
        template +=  ` <tr>
        <td data-cell="nome">${usuario.nome}</td>
        <td data-cell="data de nascimento">${usuario.dia}/${usuario.mes}/${usuario.ano}</td>
        <td data-cell="idade">${usuario.idade}</td>
        <td data-cell="faixa etária">${usuario.faixaEtaria}</td>
    </tr> 
        `
    });

    tabela.innerHTML = template
}

function deletarRegistros(){
    localStorage.removeItem("usuarioCadastrado")
    window.location.reload()

}