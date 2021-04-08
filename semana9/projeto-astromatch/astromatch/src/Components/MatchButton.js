import React from 'react'
import { ChoiceButton} from './style'

export default function MatchButton(props) {
    return <ChoiceButton onClick={props.chooseMatch} activeColor={'#ff7b7b'} color={'#a70000'}>&#x1F491;</ChoiceButton>
}