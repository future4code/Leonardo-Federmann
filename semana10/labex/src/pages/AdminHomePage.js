import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useProtectedPage} from '../Custom Hooks/useProtectedPage'
import {useHistory} from 'react-router-dom'
import { useGetTrips } from '../Custom Hooks/useGetTrips'
import { useControlledInput } from '../Custom Hooks/useControlledInput'
import TripCardAdmin from '../Components/TripCardAdmin'
import {useLogOut} from '../Custom Hooks/useLogOut'
import { goToCreateTripPage, goBack, goToHome } from '../Coordination/Coordination'
import { MainContainer, Header, HeaderButtonsContainer, ListOfTripsContent, FiltersContainer, ListOfTrips } from './style'

export default function AdminHomePage(){
    const token = window.localStorage.getItem('token')
    const history = useHistory()
    useProtectedPage(history)
    const [listOfTrips, setListOfTrips] = useState([])
    useEffect(()=>{
        getAllTrips()
    })
    const keyWord = useControlledInput()
    const planet = useControlledInput()
    const date = useControlledInput()
    const duration = useControlledInput()
    const filter = () =>{   
    }
    const logOut = () =>{
        window.localStorage.removeItem('token')
        history.push('/login')
    }
    const getAllTrips = async() =>{
        try{
            let tripsList = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips`)
            setListOfTrips(tripsList.data.trips)
        }catch(error){
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue explorando os mistérios do espaço!')
        }
    }
    const getTripDetail = (id) =>{
        console.log(id)
        listOfTrips.forEach((trip)=>{
            if(trip.id===id){
                history.push(`/admin/trips/${id}`)
            }
        })
    }
    const deleteTrip = async(name, id) =>{
        if(window.confirm(`Tem certeza de que deseja deletar a viagem ${name}?`)){
            try{
                await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips/${id}`, {
                    headers:{
                        auth: token,
                    }
                })
                getAllTrips()
            }catch(error){
                console.log(error)
            }
        }
    }
    return <MainContainer>
        <Header>
            <h2>Labe X</h2>
            <HeaderButtonsContainer>
                <p onClick={() => goToHome(history)}>Voltar</p>
                <p onClick={() => goToCreateTripPage(history)}>Criar viagem</p>
                <p onClick={logOut}>Log Out</p>
            </HeaderButtonsContainer>
        </Header>
        <ListOfTripsContent>
            <FiltersContainer>
                <h3>Filtrar por</h3>
                <input type="text" value={keyWord[0]} onChange={keyWord[1]} placeholder="Palavra-chave" />
                <input type="text" value={planet[0]} onChange={planet[1]} placeholder="Planeta" />
                <input value={date[0]} onChange={date[1]} type="date" />
                <input value={duration[0]} onChange={duration[1]} type="number" placeholder="Duração" />
                <br></br>
                <h3>Ordenar por</h3>
                <button>Ordem alfabética: viagem</button>
                <button>Ordem alfabética: planeta</button>
                <button>Data</button>
                <button>Duração</button>

            </FiltersContainer>
            <ListOfTrips>
                {listOfTrips.map((trip) => {
                    const { name, planet, date, durationInDays, description, id } = trip
                    return <TripCardAdmin
                        getTripDetail={()=>getTripDetail(id)}
                        name={name}
                        planet={planet}
                        date={date}
                        duration={durationInDays}
                        description={description}
                        deleteTrip={()=>deleteTrip(name, id)}
                    />
                })}
            </ListOfTrips>
        </ListOfTripsContent>
    </MainContainer>
}