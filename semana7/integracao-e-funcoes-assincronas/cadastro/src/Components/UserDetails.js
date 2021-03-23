//COMPONENTE CRIADO PARA O DESAFIO 2, QUE NÃO FOI CONCLUÍDO:

import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class UserDetails extends React.Component {
    render() {
        return <MainContainer>
            <h1>Detalhes do usuário</h1>
            <p>Nome: {this.props.name}</p>
            <p>Email: {this.props.email}</p>
            <button onClick={this.props.returnToList}>Voltar para a lista</button>
        </MainContainer>
    }
}