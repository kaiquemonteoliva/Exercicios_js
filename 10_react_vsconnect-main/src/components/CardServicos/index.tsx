import { Link } from "react-router-dom"
import "./style.css"


export function CardServicos(props: any) {

    function parseListaTechs(){
        //typeof = tipo de
        if(typeof props.techs == "string"){
            return JSON.parse(props.techs)
        }else{
            return props.techs
        }
    }


    return (


        <div className="servico">
            <div className="topo_servico">
            <span>{props.nome}</span>
            <Link to={"servicos" + props.id}>{props.nome}</Link>
                {/* <h3>{props.titulo}</h3> */}
                <span>{props.valor}</span>


            </div>
            <div className="descricao">
                <p>{props.descricao}</p>
            </div>
            


            <div className="techs">
                {
                    parseListaTechs().map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })

                }
            </div>
        </div>




    )

}