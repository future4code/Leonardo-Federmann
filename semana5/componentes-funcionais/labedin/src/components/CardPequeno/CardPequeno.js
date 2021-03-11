import React from 'react'
import "./CardPequeno.css"

export default function CardPequeno(props) {
    return (
        <div className="card-pequeno">
            <img className="imagem" src={props.imagem} alt={props.item} />
            <p><b>{props.item}: </b>{props.descricao}</p>
        </div>
    )
}
