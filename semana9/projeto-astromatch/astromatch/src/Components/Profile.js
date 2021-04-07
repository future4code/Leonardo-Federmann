import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { MainContainer, ProfileImage, ProfileContainer } from './style'

export default function Profile(props) {

    return <MainContainer>
        <ProfileImage src={props.photo} alt={props.name} />
        <ProfileContainer>
            <h1>{props.name}, {props.age}</h1>
            <p>{props.bio}</p>
        </ProfileContainer>
    </MainContainer>
}