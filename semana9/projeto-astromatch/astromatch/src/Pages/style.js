import React from 'react'
import styled from 'styled-components'

export const MainContainer = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #99aab5;
`

export const PhoneContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
width: 375px;
height: 100vh;
border: 1px solid black;
@media(max-width: 800px){
    width: 100%;
}
`

export const Header = styled.header`
width: 100%;
font-family: 'Edwardian Script ITC';
font-size: 25px;
background-color: #ffbaba;
color: #a70000;
display: flex;
justify-content: space-between;
align-items: center;
height: 10%;
`

export const Button = styled.p`
margin-right: 0.5em;
background: none;
border: none;
cursor:pointer;
:hover{
    transform: scale(0.9);
    transition: all 0.5s;
}
`

export const Logo = styled.h1`
margin-left: 0.5em;
`

export const Icon = styled.img`
width: 25px;
`

export const ButtonsContainer = styled.section`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 1rem;
`