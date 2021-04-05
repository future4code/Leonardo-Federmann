import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {MainContainer, PhoneContainer, Header, Logo, Icon, Button} from './style'

export default function SeeMatches(props) {
    return <MainContainer>
        <PhoneContainer>
            <Header>
            <Logo>Astromatch &#9829;</Logo>
            <Button onClick={props.checkOptions}><Icon src="https://image.flaticon.com/icons/png/512/2097/2097734.png" alt='Ver meus matches'/></Button>
            </Header>
        </PhoneContainer>
    </MainContainer>
}