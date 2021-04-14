import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useProtectedPage} from '../Custom Hooks/useProtectedPage'
import {useHistory} from 'react-router-dom'
import {goBack} from '../Coordination/Coordination'
import CandidateCard from '../Components/CandidateCard'
import { MainContainer, Header, HeaderButtonsContainer, TripsDetailContainer, TripInfo, TripCandidates } from './style'

export default function TripDetailsPage(){
    const pathParams = useParams()
    const token = window.localStorage.getItem('token')
    const history=useHistory()
    const [tripInfo, setTripInfo] = useState({})
    useProtectedPage(history)
    useEffect(()=>{
        getTripDetail()
    }, [])
    const logOut = () =>{
        window.localStorage.removeItem('token')
        history.push('/login')
    }
    const getTripDetail = async() =>{
        try{
            let tripDetails = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trip/${pathParams.id}`, {
                headers:{
                    auth: token
                }
            })
            setTripInfo(tripDetails.data.trip)
        }catch(error){
            alert('Ops! Ocorreu um erro no sistema, mas já estamos trabalhando para que você continue suas aventuras espaciais!')
            goBack(history)
        }
    }

    const decideCandidate = async(id, decision) =>{
        const body = {
            approve: decision,
        }
        try{
            await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips/${pathParams.id}/candidates/${id}/decide`, body, {
            headers:{
                auth: token,
            }
        })
        getTripDetail()
     }catch(error){
        alert('Não foi possível aprovar nem reprovar o candidato. Por favor, tente novamente mais tarde.')
     }
    }

    const approvedPassengers = () =>{
        if(tripInfo.approved===[]){
            return "Nenhum passageiro foi aprovado ainda"
        } else{
            let listOfApprovedPassengers = ''
            tripInfo.approved.forEach((passenger)=>{
                listOfApprovedPassengers.push(`${passenger}, `)
            })
            return listOfApprovedPassengers
        }
    }
    return <MainContainer>
        {console.log(tripInfo)}
        <Header>
            <h2>Labe X</h2>
            <HeaderButtonsContainer>
                <p onClick={() => goBack(history)}>Voltar</p>
                <p onClick={logOut}>Log Out</p>
            </HeaderButtonsContainer>
        </Header>
        <TripsDetailContainer>
            <TripInfo>
            <h3>Detalhes da viagem: {tripInfo.name}</h3>
            <div>
            <p><b>Planeta: </b>{tripInfo.planet}</p>
            <p><b>Data: </b>{tripInfo.date}</p>
            <p><b>Duração: </b>{tripInfo.durationInDays}</p>
            <p><b>Descrição: </b>{tripInfo.description}</p>
            <p><b>Passageiros aprovados:</b></p>
            {!tripInfo.approved ?
            <p>Nenhum passageiro foi aprovado ainda</p>
            :
            tripInfo.approved.map((candidate)=>{
                return <p key={candidate.id}>{candidate.name}</p>
            })
            }
            </div>
            </TripInfo>
            <TripCandidates>
            <h3>Candidatos pendentes</h3>
            <div>
                {tripInfo.candidates &&
                tripInfo.candidates.map((candidate)=>{
                    const {name, age, country, profession, applicationText, id} = candidate
                    return <CandidateCard 
                    name={name}
                    age={age}
                    country={country}
                    profession={profession}
                    applicationText={applicationText}
                    approve={()=>decideCandidate(id, true)}
                    refuse={()=>decideCandidate(id, false)}
                    />
                })}
            </div>
            </TripCandidates>
        </TripsDetailContainer>
        </MainContainer>
}