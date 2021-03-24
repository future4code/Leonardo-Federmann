import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class Home extends React.Component {
    render() {
        return <MainContainer>
            <h1>Home</h1>
            <button onClick={this.props.goToList}>Ir para a lista de usuários</button>
            <hr></hr>
            <label for="name">Nome:</label>
            <input id="name" onChange={this.props.onChangeName} value={this.props.name} placeholder="Ex: Robson Jesus"></input>
            <hr></hr>
            <label for="email">Email:</label>
            <input id="email" onChange={this.props.onChangeEmail} value={this.props.email} placeholder="Ex: robinho123@gmail.com"></input>
            <hr></hr>
            <button onClick={this.props.createUser}>Criar usuário</button>
        </MainContainer>
    }
}