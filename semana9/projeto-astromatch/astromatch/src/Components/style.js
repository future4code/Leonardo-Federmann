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
width: 80%;
border-radius: 50%;
box-shadow: 0 0 0.3rem 0.3rem #8f9779;
display: inline;
`

export const ProfileContainer = styled.section`
height: 20%;
width:90%;
display: flex;
flex-direction: column;
justify-content: flex-start;
font-family: Arial;
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
`