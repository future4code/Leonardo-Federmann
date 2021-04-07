import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Profile from '../Components/Profile'
import MatchButton from '../Components/MatchButton'
import RejectButton from '../Components/RejectButton'
import ClearButton from '../Components/ClearButton'
import { MainContainer, PhoneContainer, Header, Button, Logo, Icon, ButtonsContainer } from './style'

export default function SeeOptions(props) {

    const [renderedProfile, setRenderedProfile] = useState({})

    useEffect(() => {
        getAProfileToChoose()
        document.title = `Bem vindo ao Astromatch!`
    }, [])

    const getAProfileToChoose = async () => {
        try {
            let profile = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person`)
            setRenderedProfile(profile.data.profile)
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
            console.log(error.response)
        }
    }

    const myChoice = async(profile, choice) =>{
        try{
            let body = {
                id: profile.id,
                choice: choice,
            }
            let chosenPerson = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person`, body)
            getAProfileToChoose()
        }catch(error){
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
            console.log(error.response)
        }
    }

    const clearMatches = async() =>{
        try{
            await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear`)
            alert('Sucesso! Você não tem mais matches agora.')
        }catch(error){
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue conhecendo novas pessoas!')
            console.log(error.response.data)
        }
    }

    return <MainContainer>
        <PhoneContainer>
            <Header>
                <Logo>Astromatch &#9829;</Logo>
                <Button onClick={props.checkMatches}><Icon src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png" alt='Ver meus matches' /></Button>
            </Header>
            {renderedProfile ?
                <Profile
                    photo={renderedProfile.photo}
                    name={renderedProfile.name}
                    age={renderedProfile.age}
                    bio={renderedProfile.bio}
                />
                :
                <h1>Carregando...</h1>
                }
            <ButtonsContainer>
                <RejectButton 
                chooseReject={()=>myChoice(renderedProfile, false)}
                />
                <MatchButton 
                chooseMatch={()=>myChoice(renderedProfile, true)}
                />
                <ClearButton 
                clearMatches={clearMatches}
                />
            </ButtonsContainer>
        </PhoneContainer>
    </MainContainer>
}