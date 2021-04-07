import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { MatchContainer, MatchImage} from './style'

export default function MyMatch(props) {

    return <MatchContainer>
        <MatchImage src={props.imageUrl}/>
        <p>{props.name}</p> 
    </MatchContainer>
}