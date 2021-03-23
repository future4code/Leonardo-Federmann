import React from 'react'
import styled from 'styled-components'

const Pergunta = styled.label`
font-size: 20px;
margin: 10px;
`

const Preencher = styled.input`
height: 15px;
`

export default class Etapa1 extends React.Component {

    render() {
        return <div>
            <Pergunta for={this.props.pergunta}>{this.props.pergunta}</Pergunta>
            <Preencher id={this.props.pergunta} placeholder={this.props.placeholder} />
        </div>
    }
}