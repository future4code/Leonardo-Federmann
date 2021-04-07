import React from 'react'
import styled from 'styled-components'

export const MainContainer = styled.main`
margin-top: 1rem;
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ProfileImage = styled.img`
height: 80%;
width: 90%;
border-radius: 10px;
box-shadow: 0 0 0.3rem 0.3rem #8f9779;
`

export const ProfileContainer = styled.section`
height: 20%;
width:90%;
display: flex;
flex-direction: column;
justify-content: flex-start;
font-family: Arial;
font-size: 1em;
h1{
    margin: 10px 0 0 0;
}
p{
    margin:5px 0 0 0;
}
`

export const ChoiceButton = styled.button`
font-size: 2rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-radius: 50%;
padding: 0.5rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}
`

export const ClearButton = styled.button`
margin-right: 0.5em;
background: none;
border: none;
cursor:pointer;
:hover{
    transform: scale(0.9);
    transition: all 0.5s;
}
`

export const MatchContainer = styled.section`
height: 10%;
width: 95%;
margin: 0.3rem 0;
display:flex;
align-items: center;
justify-content: flex-start;
font-family: Arial;
p{
    margin-left: 0.5rem;
}
:hover{
    background-color: #ffbaba;
}
`

export const MatchImage = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
margin-left: 0.3rem;
`

export const MatchInfo = styled.section`
display: flex;
justify-content: flex-start;
align-items: center;
`
