import React from 'react'
import styled from 'styled-components'
import Etapa1 from './Etapa1'
import Etapa2 from './Etapa2'
import Etapa3 from './Etapa3'
import Finalizacao from './Finalizacao'

export default class TelaRenderizada extends React.Component {
    state = {
        etapa: 1
    }

    avancar = () => {
        if (this.state.etapa < 4) {
            this.setState({ etapa: this.state.etapa + 1 })
        }
    }

    voltar = () => {
        if (this.state.etapa > 1) {
            this.setState({ etapa: this.state.etapa - 1 })
        }
    }

    telaRenderizada = () => {

        switch (this.state.etapa) {
            case 1:
                return <Etapa1 proxima={this.avancar} />
            case 2:
                return <Etapa2 proxima={this.avancar} ultima={this.voltar} />
            case 3:
                return <Etapa3 proxima={this.avancar} ultima={this.voltar} />
            case 4:
                return <Finalizacao />
            default:
                break
        }
    }

    render() {
        return <div><h1>{this.telaRenderizada()}</h1></div>
    }
}