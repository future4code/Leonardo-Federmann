import React from 'react'
import { ProfileContainer, ProfileImage, ProfileDescription } from './style'

export default function Profile(props) {
    return <ProfileContainer>
        <ProfileImage src={props.photo} alt={props.name} />
        <ProfileDescription>
            <h1>{props.name}, {props.age}</h1>
            <p>{props.bio}</p>
        </ProfileDescription>
    </ProfileContainer>
}