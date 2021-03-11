import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

// ITEM 2: as variáveis seguintes foram criadas para a estilização do formulário:

let Formulario = styled.form`
display:flex;
flex-direction: column;
align-items: center;
background-color: #99ccff;
margin: 10px;
padding: 0 20px;
`
let InputDoFormulario = styled.input`
  margin: 5px;
  width: 300px;
`
let BotaoAdicionarPost = styled.p`
background-color: black;
color:white;
text-align:center;
width: 150px;
padding: 10px;
cursor:pointer;
border: doble white 5px;
`

class App extends React.Component {
  //  ITEM 1: criar um array de objetos dentro do state, cada objeto referente a cada post:
  state = {
    postsObjetos: [
      {
        nome: 'Peter Parker',
        foto: 'https://t2.tudocdn.net/492362?w=550&h=550',
        post: 'https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2019/07/Homem-Aranha.jpg'
      },
      {
        nome: 'Tony Stark',
        foto: 'https://terrafm94.com.br/wp-content/uploads/2018/05/Robert-Downey-Jr-homem-de-ferro.jpg',
        post: 'https://s2.glbimg.com/V5yb5rCEWPNyb4PP0lncRpWyeL4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/J/6/OYDoBRSfOFGfZkQ8wbBg/captura-de-tela-2020-06-26-as-13.00.25.png'
      },
      {
        nome: 'Thor',
        foto: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/06/ThorChris_VingadoresUltimatoDestaque.jpg',
        post: 'https://ibcdn.canaltech.com.br/GJTugbDh4mqbeNTeJFPuztnY6SY=/512x288/smart/i392169.jpeg'
      }
    ],
    inputNome: "",
    inputFoto: "",
    inputFotoPost: ""
  }

  // ITEM 2: as quatro funções a seguir referem-se à criação do formulário e adição de novo post por meio dele:
  onChangeInputNome = (event) => {
    this.setState({
      inputNome: event.target.value,
    })
  }

  onChangeInputFoto = (event) => {
    this.setState({
      inputFoto: event.target.value,
    })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({
      inputFotoPost: event.target.value
    })
  }

  adicionarPost = () =>{
    let novoPost = {
      nome: this.state.inputNome,
      foto: this.state.inputFoto,
      post: this.state.inputFotoPost
    }
    let arrayIntermediaria = [...this.state.postsObjetos, novoPost]
    this.setState({
      postsObjetos: arrayIntermediaria,
      inputNome:'',
      inputFoto:'',
      inputFotoPost:''
    })
  }

  // ITEM 2: variável criada para estilização do formulário:

  render() {

    // ITEM 1: criar uma nova array com base na do state por meio do arra.map:
    let postsComponentes = this.state.postsObjetos.map((heroi) => {
      return <Post nomeUsuario={heroi.nome} fotoUsuario={heroi.foto} fotoPost={heroi.post} />
    })

    return (
      <div className={'app-container'}>
        <Formulario>
        <h3>Adicionar novo post</h3>
          <InputDoFormulario value={this.state.inputNome} onChange={this.onChangeInputNome} placeholder={'Nome'} />
          <InputDoFormulario value={this.state.inputFoto} onChange={this.onChangeInputFoto} placeholder={'Link para sua foto de perfil'} />
          <InputDoFormulario value={this.state.inputFotoPost} onChange={this.onChangeInputFotoPost} placeholder={'Link para a foto do post'} />
          <BotaoAdicionarPost onClick={this.adicionarPost}>Adicionar Post</BotaoAdicionarPost>
        </Formulario>
        {/* ITEM 1: chamar a array, substituindo a solução de ontem por ela: */}
        {postsComponentes}

        {/* Solução da atividade de ontem comitada: */}
        {/* <Post
          nomeUsuario={'Peter Parker'}
          fotoUsuario={'https://t2.tudocdn.net/492362?w=550&h=550'}
          fotoPost={'https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2019/07/Homem-Aranha.jpg'}
        />
        <Post
          nomeUsuario={'Tony Stark'}
          fotoUsuario={'https://terrafm94.com.br/wp-content/uploads/2018/05/Robert-Downey-Jr-homem-de-ferro.jpg'}
          fotoPost={'https://s2.glbimg.com/V5yb5rCEWPNyb4PP0lncRpWyeL4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/J/6/OYDoBRSfOFGfZkQ8wbBg/captura-de-tela-2020-06-26-as-13.00.25.png'}
        />
        <Post
          nomeUsuario={'Thor'}
          fotoUsuario={'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/06/ThorChris_VingadoresUltimatoDestaque.jpg'}
          fotoPost={'https://ibcdn.canaltech.com.br/GJTugbDh4mqbeNTeJFPuztnY6SY=/512x288/smart/i392169.jpeg'}
        /> */}
      </div>
    );
  }
}

export default App;
