import React, {useContext} from 'react'
import { LikesContainer, PostCard, Text } from '../style/style'
import LanguagesMenu from '../components/LanguagesMenu'
import {languages} from '../languages/languages'
import {LanguageContext} from '../globalContext/LanguageContext'

export default function Post(props) {
    const [language, setLanguage, menu, setMenu, changeLanguage] = useContext(LanguageContext)
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
                <b onClick={props.checkDetails}>{props.numberOfComments} {props.numberOfComments===1 ? 
                languages[language].comment : languages[language].comments}</b>
            </section>
        </PostCard>
    )
}