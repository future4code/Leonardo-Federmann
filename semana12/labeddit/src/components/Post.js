import React from 'react'
import { LikesContainer, PostCard, Text } from '../style/style'

export default function Post(props) {
    return (
        <PostCard buttonColor={props.deslikeColor}>
            <h3>{props.title}</h3>
            <strong>{props.userName}</strong>
            <Text>{props.text}</Text>
            <section>
                <LikesContainer>
                <div>
                    <button onClick={props.positiveVote}><img src={props.likeIcon} /></button>
                    <p>{props.numberOfPositiveVotes}</p>
                    <button onClick={props.negativeVote}><strong>X</strong></button>
                </div>
                </LikesContainer>
                <b onClick={props.checkDetails}>{props.numberOfComments} comentários</b>
            </section>
        </PostCard>
    )
}