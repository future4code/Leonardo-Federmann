import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.header`
background-color: aqua;
display: flex;
flex-direction: column;
align-items: center;
`

const Button = styled.button`
margin-bottom: 10px;
`

export default class Header extends React.Component {

    render() {
        return (
            <MainContainer >
                <h1>Bem vindo ao Labefy</h1>
                <Button onClick={this.props.goToPage}>{this.props.whichPage}</Button>
            </MainContainer>
        );
    }
}