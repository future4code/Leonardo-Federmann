import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

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
justify-content: flex-end;
width: 400px;
margin: 20px;
`

export default class Etapa1 extends React.Component {

    render() {
        return <MainContainer>
            <Titulo>Dados Gerais</Titulo>
            <div>
                <PerguntaAberta pergunta={'Nome completo:'} placeholder={'Exemplo: Robson Almeida'} />
                <PerguntaAberta pergunta={'Idade:'} placeholder={'Exemplo: 27'} />
                <PerguntaFechada pergunta={'Escolaridade:'} default={'Escolaridade'} arrayDeOpcoes={['Ensino Médio Incompleto', 'Ensino Médio Completo', 'Ensino Superior Incompleto', 'Ensino Superior Completo']} />
            </div>
            <ContainerBotoes>
                <button onClick={this.props.proxima}>Avançar</button>
            </ContainerBotoes>
        </MainContainer>
    }
}