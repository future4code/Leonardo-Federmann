import logo from './logo.svg';
import './App.css';

function App() {
  //Declaração da variável "titulo":
  const titulo = 'Título do vídeo'

  //Função para a reprodução de vídeos (alerta avisando sobre sua reprodução):
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  //JSX em si:
  return (
    <div className="tela-inteira">
      <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        {/* Adicionei os seguintes botões na lateral direita do header, tal como o Youtube: */}
        <p><button>&#128276;</button><button>&#x229E;</button></p>
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            {/* Removi o seguinte hr para melhorar a estilização: */}
            {/* <hr /> */}
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <div className="box-pagina-principal media1 imagem" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media2 imagem" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=2 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media3 imagem" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=3 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media4 imagem" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=4 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media5 imagem" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=5 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media6 imagem" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=6 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media7 imagem" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=7 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media8 imagem" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=8 " alt="" />
            <h4>{titulo}</h4>
          </div>
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  );
}

export default App;
