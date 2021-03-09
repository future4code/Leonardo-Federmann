import React from 'react';
import './App.css';
import minhaFoto from './imagens/minhaFoto.jpg'
import artelia from './imagens/Artelia.jpg'
import iqvia from './imagens/IQVIA.png'
import aiesec from './imagens/AIESEC.png'
import mackenzie from './imagens/Mackenzie.png'
import email from './imagens/email.jpg'
import endereco from './imagens/endereco.jpg'
import labenu from './imagens/Labenu.png'
import usp from './imagens/USP.jpg'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno.js'
import Competencias from './components/Competencias/Competencias'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={minhaFoto}
          nome="Leonardo Federmann"
          descricao="Olá! Sou o Leonardo, estudante de programação e futuro dev. Estou aprendendo tudo de que preciso para me tornar um desenvolvedor Web Full Stack, estando preparado para atuar em Front-end e Back-end e para manipular variados recursos dessas áreas (como HTML, CSS, JavaScript, Node, React, PHP, dentre outros)."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
          imagem={email}
          item="Email"
          descricao="BANANINHAAAAAAA@gmail.com"
        />
        <CardPequeno
          imagem={endereco}
          item="Endereço"
          descricao="Rua Bananinha, 123456 - Bananinha - BANANINHA(BN)"
        />
      </div>

      {/* DESAFIO 2: criação de novo componente: */}
      <div className="page-section-container">
        <h2>Algumas competências</h2>
        <div className="container-de-competencias">
          <Competencias
            titulo="Soft skills"
            competencia1="Liderança de equipes"
            competencia2="Comunicação não-violenta"
            competencia3="Accountability"
            competencia4="Rápido aprendizado"
            competencia5="Resiliência"
          />
          <Competencias
            titulo="Hard skills"
            competencia1="HTML, CSS e JavaScript"
            competencia2="React"
            competencia3="Pacote Office"
            competencia4="Metodologias ágeis"
            competencia5="PMBoK"
          />
        </div>

      </div>

      {/* Nova div de classe "page-section-container" acrescentada para a realização do desafio 1 */}
      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande
          imagem={labenu}
          nome="Labenu"
          descricao="Curso de programação para tornar-se desenvolvedor Web Full Stack, aprendendo todos os conceitos e principais ferramentas da programação Front-end e Back-end, incluindo, dentre outras: HTML, CSS, JavaScript, React, Node, PHP, SQL." />

        <CardGrande
          imagem={usp}
          nome="MBA em Gestão de Projetos - USP"
          descricao="MBA em Gestão de Projetos, estudando o PMBOK, métodos ágeis e seus conceitos e aplicações." />

        <CardGrande
          imagem={mackenzie}
          nome="Gradução: Engenharia Civil, Mackenzie"
          descricao="Graduação em engenharia civil na Universidade Presbiteriana Mackenzie, tendo atingido o final do curso sem dependências ('DP') e realizado um TCC com padrão de excelência." />

      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={iqvia}
          nome="IQVIA"
          descricao="Elaborando propostas e orçamentos para variados clientes nacionais e internacionais do mercado farmacêutico"
        />

        <CardGrande
          imagem={artelia}
          nome="Artelia"
          descricao="Participando de processos de licitação para a contratação de construtoras em diversas obras, atuando especialmente na análise e equalização de prazos, custos e escopo; assistindo engenheiros projetistas na elaboração de projetos técnicos; e desempenhando atividades visando ao alcance da certificação ISO 9001."
        />

        <CardGrande
          imagem={mackenzie}
          nome="Universidade Presbiteriana Mackenzie"
          descricao="Monitor da disciplina Resistência dos Materiais, do curso de Engenharia Civil."
        />
      </div>

      {/* Nova div de classe "page-section-container" acrescentada para a realização do desafio 1 */}
      <div className="page-section-container">
        <h2>Trabalhos científicos</h2>
        <CardGrande
          imagem={mackenzie}
          nome="Revitalização do rio Tietê: avaliação do processo de despoluição e análise da aplicabilidade de métodos usados em rios de outros países"
          descricao="Trabalho de Conclusão de Curso para a obtenção da graduação em Engenharia Civil, analisando o histórico do rio Tietê, investigando as causas de sua poluição e propondo melhorias nas medidas já utilizadas para revitalizá-lo, algumas baseadas em ações tomadas para depurar rios europeus."
        />

        <CardGrande
          imagem={usp}
          nome="Confiança em projetos empresariais voltados à sustentabilidade"
          descricao="Monografia de conclusão do MBA em Gestão de Projetos na USP, analisando a desconfiança predominante entre consumidores acerca das intenções de empresas quando realizam ações voltadas à promoção dos ODS (Objetivos do Desenvolvimento Sustentável) e propondo métodos para combater tal ceticismo com base na metodologia 5W2H."
        />
      </div>

      {/* Nova div de classe "page-section-container" acrescentada para a realização do desafio 1 */}
      <div className="page-section-container">
        <h2>Trabalhos voluntários</h2>
        <CardGrande
          imagem={aiesec}
          nome="AIESEC"
          descricao="Intercâmbio no Peru para realizar trabalho voluntário voltado à educação ambiental de crianças e adolescentes." />
        <CardGrande
          imagem="https://miro.medium.com/max/3150/1*8q_ZrH3RRMdX5yMTLlkorQ.jpeg"
          nome="Ubunrua"
          descricao="Voluntário em grupo de assistência a pessoas em situação de rua em São Paulo, atuando no planejamento de atividades, na organização e triagem de doações e na realização de ações."
        />
        <CardGrande
          imagem="https://i2.wp.com/abes-dn.org.br/wp-content/uploads/2016/02/LOGO_JPS-e1455499814591.png?fit=737%2C333"
          nome="JPS - ABES"
          descricao="Realização de workshops em comunidades visando à educação ambiental de crianças e adolescentes, debatendo sobre temas ecológicos, tais como: desmatamento, poluição hídrica, aquecimento global e reciclagem."
        />
        <CardGrande
          imagem="http://www.cotic.org/img/logo.png"
          nome="COTIC"
          descricao="Visitas, suporte e realização de atividades diversas em casas de crianças carentes e deficientes."
        />
        <CardGrande
          imagem="https://yt3.ggpht.com/ytc/AAUvwnhqPj6wdsSVVpGYL5MUj1rD5UZ7hCxsq794QK2VxA=s900-c-k-c0x00ffffff-no-rj"
          nome="DM Santana - USE"
          descricao="Planejamento, organização e realização de eventos de cunho religioso."
        />
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQFdVEV-4EMy_Q/company-logo_200_200/0/1519864787255?e=2159024400&v=beta&t=3QSY7jQnWxjWyR_u3KaFeCzQTzZxDlTheuYNzOCT1XU"
          nome="Grupo Escoteiro e Núcleo Bandeirante Avanhandava"
          descricao="Participação em grupo escoteiro, passando por todas as etapas do escotismo e tornando-se chefe."
        />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://i.pinimg.com/originals/72/a3/d9/72a3d9408d41335f39e9f014dc35cf44.jpg"
          texto="Instagram"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/174/174857.png"
          texto="Linkedin"
        />
      </div>
    </div>
  );
}

export default App;
