import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { MainContainer, ChoiceButton} from './style'

export default function RejectButton(props) {

    return <ChoiceButton onClick={props.chooseReject} color={'#008744'}>&#129326;</ChoiceButton>
}