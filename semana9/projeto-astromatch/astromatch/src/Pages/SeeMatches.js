import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MyMatch from '../Components/MyMatch'
import ClearButton from '../Components/ClearButton'
import { MainContainer, PhoneContainer, Header, Logo, Icon, Button } from './style'
import { useEffect } from 'react/cjs/react.development'

export default function SeeMatches(props) {

    const [matchesList, setMatchesList] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = async () => {
        try {
            let matches = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches`)
            setMatchesList(matches.data.matches)
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
            console.log(error.response.data)
        }
    }

    const clearMatches = async () => {
        try {
            await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear`)
            getMatches()
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
            console.log(error.response.data)
        }
    }

    return <MainContainer>
        <PhoneContainer>
            <Header>
                <Logo>Astromatch &#9829;</Logo>
                <Button onClick={props.checkOptions}><Icon src="https://image.flaticon.com/icons/png/512/2097/2097734.png" alt='Ver meus matches' /></Button>
            </Header>
            {matchesList !==[] ?
            <React.Fragment>
                {matchesList.map((match) => {
                    return <MyMatch
                        imageUrl={match.photo}
                        name={match.name}
                    />
                })}
                <ClearButton
                    clearMatches={clearMatches}
                />
            </React.Fragment>
                // matchesList.map((match) => {
                //     return <MyMatch
                //         imageUrl={match.photo}
                //         name={match.name}
                //     />
                // })
                :
                <h1>Carregando...</h1>
            }
        </PhoneContainer>
    </MainContainer>
}