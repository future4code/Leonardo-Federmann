import React from 'react'
import {CandidateCard, ButtonsContainer} from './style'

export default function TripCard(props){
    return <CandidateCard>
        <h3>{props.name}</h3>
        <div>
            <p><b>Idade: </b>{props.age}</p>
            <p><b>País: </b>{props.country}</p>
            <p><b>Profissão: </b>{props.profession}</p>
            <p><b>Sobre o candidato: </b>{props.applicationText}</p>
        </div>
        <ButtonsContainer>
            <button onClick={props.approve}>Aprovar</button>
            <button onClick={props.refuse}>Recusar</button>
        </ButtonsContainer>
    </CandidateCard>
}