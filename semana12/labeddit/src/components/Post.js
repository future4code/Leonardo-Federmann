import React from 'react'
import { LikesContainer, PostCard } from '../style/style'

export default function Post(props) {
    return (
        <PostCard buttonColor={props.deslikeColor}>
            <h2>{props.userName}</h2>
            <p>{props.text}</p>
            <section>
                <LikesContainer>
                <div>
                    <button><img src={props.likeIcon} /></button>
                    <p>{props.numberOfLikes}</p>
                </div>
                <div>
                    <button><strong>X</strong></button>
                    <p>{props.numberOfDeslikes}</p>
                </div>
                </LikesContainer>
                <b>{props.numberOfComments} comentários</b>
            </section>
        </PostCard>
    )
}