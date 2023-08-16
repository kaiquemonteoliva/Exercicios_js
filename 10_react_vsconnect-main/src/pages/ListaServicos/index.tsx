import { useState } from "react"
import { CardServicos } from "../../components/CardServicos";
import "./style.css"

export default function ListaServicos() {

    const [servicos, setServicos] = useState<any[]>([
        {
            titulo: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
            salario: "R$ 1300,00",
            descricao: "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
            skills: ["HTML","CSS","React"]
        },
        {
            titulo: "Bot telegram Pagamento",
            salario: "R$ 2400,00",
            descricao: "Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
            skills: ["Python"]
        },
        {
            titulo: "Caixa Rápido",
            salario: "R$ 1200,00",
            descricao: "Preciso fazer um  software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas",
            skills: ["Python"]
        },
        {
            titulo: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
            salario: "R$ 1300,00",
            descricao: "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
            skills: ["HTML", "CSS", "REACT"]
        },
    ])

    const[tituloDigitado, setTituloDigitado] = useState<string>("");

    const[listaVagaFiltrada, setListaVagaFiltrada] = useState<any[]>(servicos);

    function buscarPorVagas(event: any){
        event.preventDefault();

        const vagaFiltrada = servicos.filter((servicos: any) => servicos.skills.includes(tituloDigitado.toLocaleUpperCase()));

        if(vagaFiltrada.length === 0 ){
            alert("Nenhuma vaga encontrada")
        }else{
            setListaVagaFiltrada(vagaFiltrada)
        }
    }

    function retornoVagasGeral(event: any){
        if(event.target.value === ""){
            setListaVagaFiltrada(servicos)
        }
        setTituloDigitado(event.target.value)

    }

    return (
        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr/>
                        <form method="post">
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..."/>
                                        <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {listaVagaFiltrada.map((servicos: any, index: number) => {
                                    return <li key={index}>
                                       <CardServicos
                                        titulo={servicos.titulo}
                                        salario={servicos.salario}
                                        descricao={servicos.descricao}
                                        techs={servicos.skills}
                                        />     

                                    </li>
                                }
                                )}
                                
                            </ul>
                        </div>
                </div>
            </div>
        </main>
    )
}