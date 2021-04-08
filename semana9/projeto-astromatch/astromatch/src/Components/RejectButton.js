import React from 'react'
import { ChoiceButton } from './style'

export default function RejectButton(props) {
    return <ChoiceButton onClick={props.chooseReject} color={'#008744'} activeColor={'#003333'}>&#129326;</ChoiceButton>
}