import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { ChoiceButton, ClearButton} from './style'

export default function MatchButton(props) {
    return <ChoiceButton onClick={props.clearMatches} activeColor={'black'} color={'#555555'}>&#129320;</ChoiceButton>
}