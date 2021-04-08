import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Profile from '../Components/Profile'
import Header from '../Components/Header'
import MatchButton from '../Components/MatchButton'
import RejectButton from '../Components/RejectButton'
import ClearButton from '../Components/ClearButton'
import Loading from '../Components/Loading'
import PassButton from '../Components/PassButton'
import { MainContainer, PhoneContainer, ButtonsContainer } from './style'

export default function SeeOptions(props) {

    const [renderedProfile, setRenderedProfile] = useState({})

    useEffect(() => {
        getAProfileToChoose()
    }, [])

    const getAProfileToChoose = async () => {
        try {
            let profile = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/person`)
            setRenderedProfile(profile.data.profile)
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
        }
    }

    const myChoice = async (id, choice) => {
        try {
            let body = {
                id: id,
                choice: choice,
            }
            await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/choose-person`, body)
            getAProfileToChoose()
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
        }
    }

    const clearMatches = async () => {
        try {
            await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/clear`)
            alert('Sucesso! Você não tem mais matches agora.')
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
        }
    }

    return <MainContainer>
        <PhoneContainer>
            <Header 
            checkWhat={props.checkMatches}
            iconUrl={'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png'}
            buttonDescription={'Ver meus matches'}
            />
            {renderedProfile && renderedProfile !== {} ?
                <React.Fragment>
                    <Profile
                        photo={renderedProfile.photo}
                        name={renderedProfile.name}
                        age={renderedProfile.age}
                        bio={renderedProfile.bio}
                    />
                    <ButtonsContainer>
                        <RejectButton
                            chooseReject={() => myChoice(renderedProfile.id, false)}
                        />
                        <MatchButton
                            chooseMatch={() => myChoice(renderedProfile.id, true)}
                        />
                        <PassButton
                            seeAnotherProfile={getAProfileToChoose}
                        />
                        <ClearButton
                            clearMatches={clearMatches}
                        />
                    </ButtonsContainer>
                </React.Fragment>
                :
                <Loading />
            }
        </PhoneContainer>
    </MainContainer>
}