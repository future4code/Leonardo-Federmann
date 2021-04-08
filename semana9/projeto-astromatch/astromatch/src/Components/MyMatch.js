import React from 'react'
import { MatchContainer, MatchImage} from './style'

export default function MyMatch(props) {
    return <MatchContainer>
        <MatchImage src={props.imageUrl}/>
        <p>{props.name}</p> 
    </MatchContainer>
}