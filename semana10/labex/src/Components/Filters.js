import React from 'react'
import {FiltersContainer} from './style'
import {useControlledInput} from '../Custom Hooks/useControlledInput'

export default function Filters(){
    const keyWord = useControlledInput()
    const planet = useControlledInput()
    const date = useControlledInput()
    const duration = useControlledInput()
    return <FiltersContainer>
    <h3>Filtrar por</h3>
    <input type="text" value={keyWord[0]} onChange={keyWord[1]} placeholder="Palavra-chave"/>
    <input type="text" value={planet[0]} onChange={planet[1]} placeholder="Planeta"/>
    <input value={date[0]} onChange={date[1]} type="date"/>
    <input value={duration[0]} onChange={duration[1]} type="number" placeholder="Duração"/>
    <br></br>
    <h3>Ordenar por</h3>
    <button>Ordem alfabética: viagem</button>
    <button>Ordem alfabética: planeta</button>
    <button>Data</button>
    <button>Duração</button>

</FiltersContainer>
}