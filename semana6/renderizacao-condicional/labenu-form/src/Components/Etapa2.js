import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: flex-start;
height:100vh;
font-family: Arial;
`

const Titulo = styled.h3`
padding: 0;
`

const ContainerBotoes = styled.div`
display: flex;
justify-content: space-between;
width: 400px;
margin: 20px;
`

export default class Etapa2 extends React.Component {

    render() {
        return <MainContainer>
            <Titulo>Informações sobre Ensino Superior</Titulo>
            <div>
                <PerguntaAberta pergunta={'Qual curso?'} placeholder={'Exemplo: Administração'} />
                <PerguntaAberta pergunta={'Qual a unidade de ensino?'} placeholder={'Exemplo: USP'} />
                <PerguntaAberta pergunta={'Por qual motivo você não concluiu o Ensino Superior, caso não o tenha concluído?'} placeholder={'Exemplo: Motivos financeiros...'} />
            </div>
            <ContainerBotoes>
                <button onClick={this.props.ultima}>Voltar</button>
                <button onClick={this.props.proxima}>Avançar</button>
            </ContainerBotoes>
        </MainContainer>
    }
}