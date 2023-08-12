import "./style.css"
import Logo from "../../assets/img/logo.svg"
import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Linkedin from "../../assets/img/linkedin.svg"

function Servicos() {
  // Mostrar menu no layout responsivo


  function mostrarMenu() {
    let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
    let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
    let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

    let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

    if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
      menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
      sombra.style.right = "-10vw"; // Move a sombra para a direita
      menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
      menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
      body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    } else {
      menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
      sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
      menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
      menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
      body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
    }
    menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
  }



  return (
    <>
      
      <main>
        <div className="container container_lista_servicos">
          <div className="lista_servicos_conteudo">
            <h1>Lista de Serviços</h1>
            <hr />
            <form method="post">
              <div className="wrapper_form">
                <label htmlFor="busca">Procurar serviços</label>
                <div className="campo-label">
                  <input
                    type="search"
                    name="campo-busca"
                    id="busca"
                    placeholder="Buscar serviços por tecnologias..."
                  />
                  <button type="submit">Buscar</button>
                </div>
              </div>
            </form>
            <div className="wrapper_lista">
              <ul>
                <li>
                  <div className="servico">
                    <div className="topo_servico">
                      <h3>
                        Desenvolvimento de site institucional - Gateway de Pagamento
                        / Fintech
                      </h3>
                      <span>R$ 1300,00</span>
                    </div>
                    <p>
                      Desenvolver um site responsivo que seja utilizado como uma
                      plataforma de apresentação do nosso gateway de pagamento. O
                      objetivo principal deste projeto é criar um site atraente e
                      informativo, que demonstre as funcionalidades e benefícios do
                      nosso gateway de pagamento para potenciais clientes.
                    </p>
                    <div className="techs">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>React</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="servico">
                    <div className="topo_servico">
                      <h3>Bot telegram Pagamento</h3>
                      <span>R$ 2400,00</span>
                    </div>
                    <p>
                      Preciso fazer um código em python para um bot do telegram. O
                      bot será para solicitação de pagamento.
                    </p>
                    <div className="techs">
                      <span>Python</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="servico">
                    <div className="topo_servico">
                      <h3>Caixa Rápido</h3>
                      <span>R$ 1200,00</span>
                    </div>
                    <p>
                      Preciso fazer um software que permita ao usuário fazer o
                      upload de seu extrato bancário em formato( ofx). Dentro do
                      software o mesmo poderá categorizar todas as suas receitas e
                      despesas, tendo categorias sugeridas pelo software e
                      permitindo também personalizações. Após o lançamento de vários
                      extratos o software irá entender que são lançamentos parecidos
                      e fará a categorização de maneira automática, cabendo ao
                      usuário somente categorizar as receitas e despesas que não se
                      repetem. Após a categorização o software irá emitir gráficos e
                      relatórios baseados na categorização das contas.
                    </p>
                    <div className="techs">
                      <span>Python</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
    </>

  )
}

export default Servicos