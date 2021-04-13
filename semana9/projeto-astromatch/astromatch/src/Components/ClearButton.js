import React from 'react'
import { ChoiceButton } from './style'

export default function MatchButton(props) {
    return <ChoiceButton onClick={props.clearMatches} activeColor={'black'} color={'#555555'}>&#8635;</ChoiceButton>
}