import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {goBack, goToListOfTrips} from '../Coordination/Coordination'
import { MainContainer, Header, HeaderButtonsContainer } from './style'

export default function ApplicationFormPage(){
    const history = useHistory()
    return <MainContainer>
        <Header>
            <h2>Labe X</h2>
            <HeaderButtonsContainer>
                <p onClick={() => goBack(history)}>Voltar</p>
                <p onClick={()=>goToListOfTrips(history)}>Lista de viagens</p>
            </HeaderButtonsContainer>
        </Header>
    </MainContainer>
}