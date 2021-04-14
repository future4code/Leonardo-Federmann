import React from 'react'
import {CardOfTrip, ButtonsContainer} from './style'

export default function TripCard(props){
    return <>
    <CardOfTrip>
        <h1>{props.name}</h1>
        <div>
        <p><b>Planeta: </b>{props.planet}</p>
        <p><b>Data: </b>{props.date}</p>
        <p><b>Duração: </b>{props.duration} dias</p>
        <p><b>Descrição: </b>{props.description}</p>
        </div>
        <ButtonsContainer>
        <button onClick={props.getTripDetail}>Ver detalhes</button>
        <button onClick={props.deleteTrip}>X</button>
        </ButtonsContainer>
    </CardOfTrip>
    </>
}