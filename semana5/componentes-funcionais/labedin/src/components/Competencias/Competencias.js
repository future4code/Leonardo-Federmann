//DESAFIO 2: criação de novo componente (competências)

import React from 'react'
import './Competencias.css'

export default function Competencias(props) {
    return (
        <div className="competencias">
            <h3>{props.titulo}</h3>
            <p>{props.competencia1}</p>
            <p>{props.competencia2}</p>
            <p>{props.competencia3}</p>
            <p>{props.competencia4}</p>
            <p>{props.competencia5}</p>
        </div>
    )
}

