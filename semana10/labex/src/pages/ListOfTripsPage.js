import React from 'react'
import {MainContainer, Header, HeaderButtonsContainer} from './style'

export default function ListOfTripsPage(){

    return <MainContainer>
        <Header>
            <h2>Labe X</h2>
            <HeaderButtonsContainer>
            {/* <button>Voltar</button>
            <button>Inscrição</button> */}
            <p>Voltar</p>
            <p>Inscrição</p>
        </HeaderButtonsContainer>
        </Header>
    </MainContainer>
}