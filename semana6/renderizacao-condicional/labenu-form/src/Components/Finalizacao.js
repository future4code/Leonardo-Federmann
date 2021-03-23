import React from 'react'
import styled from 'styled-components'

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

const Pergunta = styled.label`
font-size: 20px;
margin: 10px;
`

const Preencher = styled.input`
height: 15px;
`

const ContainerBotoes = styled.div`
display: flex;
justify-content: flex-end;
width: 400px;
margin: 20px;
`

export default class Finalizacao extends React.Component {

    render() {
        return <MainContainer>
            <Titulo>Obrigado por se inscrever!</Titulo>
        </MainContainer>
    }
}