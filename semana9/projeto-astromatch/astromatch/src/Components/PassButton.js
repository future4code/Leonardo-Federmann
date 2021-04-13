import React from 'react'
import { ChoiceButton } from './style'

export default function PassButton(props) {
    return <ChoiceButton onClick={props.seeAnotherProfile} activeColor={'#4b86b4'} color={'#2a4d69'}>&#129300;</ChoiceButton>
}