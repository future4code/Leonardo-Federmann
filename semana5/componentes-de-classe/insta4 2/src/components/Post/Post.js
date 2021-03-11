import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import SecaoCompartilhamento from '../SecaoCompartilhamento/SecaoCompartilhamento'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,

    //propriedade adicionada para o Desafio 1:
    marcado: false,

    //propriedade adicionada para o Desaio 2:
    desejaCompartilhar: false,

    //propriedade adicionada para o Desaio 3:
    textoDoPost: '',
  }

  onClickCurtida = () => {
    console.log('Curtiu!')

    // ITEM 2: fazer com que o ícone de curtida mude quando o usuário clicar nele:
    this.setState({
      curtido: !this.state.curtido,
    })

    //ITEM 3: fazer com que o número de curtidas aumente em 1 caso o usuário esteja curtindo o post e diminua em 1 caso esteja descurtindo:
    if (this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  //DESAFIO 1: função adicionada para fazer com que o símbolo de marcação de post permaneça preto como padrão, mas mude para vermelho caso seja clicado:
  marcarPost = (event) => {
    this.setState({
      marcado: !this.state.marcado,
    })
    if (this.state.marcado) {
      event.target.style = "color: red;"
    } else {
      event.target.style = "color: black;"
    }
  }
  //DESAFIO 2: função adicionada para alterar o valor booleano da propriedade "desejaCompartilhar" de TRUE para FALSE e vice-versa caso o usuário clique no ícone de compartilhamento:
  onClickCompartilhamento = () => {
    this.setState({
      desejaCompartilhar: !this.state.desejaCompartilhar
    })
  }

  //DESAFIO 2 e DESAFIO 3: função que mostrará no console uma mensagem informando em qual rede o post foi compartilhado e o texto inserido pelo usuário no campo de compartilhamento. Inclui também a mesma mensagem em um alerta ao usuário:
  mostrarMensagemDeCompartilhamento = (event) => {
    console.log(`Você compartilhou esse post no ${event.target.alt} com a mensagem: "${this.state.textoDoPost}"`)
    alert(`Você compartilhou esse post no ${event.target.alt} com a mensagem: "${this.state.textoDoPost}"`)
    this.setState({
      textoDoPost: '',
    })
  }

  //DESAFIO 3: função criada para inserir o input controlado na seção de compartilhamento:
  onChangeTextoDoPost = (event) => {
    this.setState({
      textoDoPost: event.target.value,
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    let componenteCompartilhamento

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    //DESAFIO 2: variável que mostrará o campo de compartilhamento do post quando o usuário clicar no ícone de compartilhamento:
    if (this.state.desejaCompartilhar) {
      componenteCompartilhamento = <SecaoCompartilhamento
        mensagemCompartilhamento={this.mostrarMensagemDeCompartilhamento}
        textoDoPost={this.state.textoDoPost}
        onChangeTextoDoPost={this.onChangeTextoDoPost}
      />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <div className={'user'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>

          {/* DESAFIO 1: acrescentar ícone para marcação do post (optou-se pelo símbolo de uma estrela): */}
        </div>
        <p className={'marcacao'} onClick={this.marcarPost}>&#9733;</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <img
          onClick={this.onClickCompartilhamento}
          className={'iconeCompartilhamento'}
          src={'https://image.flaticon.com/icons/png/512/52/52049.png'}
          alt="Compartilhar"
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}

      {/* DESAFIO 2: variável que mostrará o campo de compartilhamento do post quando o usuário clicar no ícone de compartilhamento: */}
      {componenteCompartilhamento}
    </div>
  }
}

export default Post