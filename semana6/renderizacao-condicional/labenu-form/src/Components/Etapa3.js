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
justify-content: space-between;
width: 400px;
margin: 20px;
`

export default class Etapa3 extends React.Component {

    render() {
        return <MainContainer>
            <Titulo>Informações complementares</Titulo>
            <div>
                <PerguntaFechada pergunta={'Você realizou algum curso complementar?'} default={'Curso complementar'} arrayDeOpcoes={['Curso técnico', 'Curso de inglês', 'Outros cursos', 'Não fiz curso complementar']} />
            </div>
            <ContainerBotoes>
                <button onClick={this.props.ultima}>Voltar</button>
                <button onClick={this.props.proxima}>Enviar</button>
            </ContainerBotoes>
        </MainContainer>
    }
}