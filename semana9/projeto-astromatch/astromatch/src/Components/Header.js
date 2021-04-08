import React from 'react'
import { Header, HeaderButton, Logo, HeaderIcon } from './style'

export default function Loading(props) {
    return <Header>
        <Logo>Astromatch &#9829;</Logo>
        <HeaderButton onClick={props.checkWhat}><HeaderIcon src={props.iconUrl} alt={props.buttonDescription} /></HeaderButton>
    </Header>
}