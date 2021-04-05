import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {MainContainer, PhoneContainer, Header, Button, Logo, Icon} from './style'

export default function SeeOptions(props) {
    return <MainContainer>
        <PhoneContainer>
            <Header>
            <Logo>Astromatch &#9829;</Logo>
            <Button onClick={props.checkMatches}><Icon src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png" alt='Ver meus matches'/></Button>
            </Header>
        </PhoneContainer>
    </MainContainer>
}