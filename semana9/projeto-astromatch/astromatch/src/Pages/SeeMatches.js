import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import MyMatch from '../Components/MyMatch'
import ClearButton from '../Components/ClearButton'
import Loading from '../Components/Loading'
import { MainContainer, PhoneContainer } from './style'

export default function SeeMatches(props) {

    const [matchesList, setMatchesList] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = async () => {
        try {
            let matches = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/matches`)
            setMatchesList(matches.data.matches)
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
        }
    }

    const clearMatches = async () => {
        try {
            await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/clear`)
            getMatches()
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
        }
    }

    return <MainContainer>
        <PhoneContainer>
            <Header
                checkWhat={props.checkOptions}
                iconUrl={'https://image.flaticon.com/icons/png/512/2097/2097734.png'}
                buttonDescription={'Ver perfis'}
            />
            {matchesList.length > 0 ?
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
                :
                <Loading />
            }
        </PhoneContainer>
    </MainContainer>
}