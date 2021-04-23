import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useProtectedPage } from '../Custom Hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import TripCardAdmin from '../Components/TripCardAdmin'
import { goToCreateTripPage, goToHome } from '../Coordination/Coordination'
import { MainContainer, Header, HeaderButtonsContainer, ListOfTripsContent } from './style'

export default function AdminHomePage() {
    const token = window.localStorage.getItem('token')
    const history = useHistory()
    useProtectedPage(history)
    const [listOfTrips, setListOfTrips] = useState([])
    useEffect(() => {
        getAllTrips()
    })

    const logOut = () => {
        window.localStorage.removeItem('token')
        history.push('/login')
    }

    const getAllTrips = async () => {
        try {
            let tripsList = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips`)
            setListOfTrips(tripsList.data.trips)
        } catch (error) {
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue explorando os mistérios do espaço!')
        }
    }

    const getTripDetail = (id) => {
        listOfTrips.forEach((trip) => {
            if (trip.id === id) {
                history.push(`/admin/trips/${id}`)
            }
        })
    }

    const deleteTrip = async (name, id) => {
        if (window.confirm(`Tem certeza de que deseja deletar a viagem ${name}?`)) {
            try {
                await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips/${id}`, {
                    headers: {
                        auth: token,
                    }
                })
                getAllTrips()
            } catch (error) {
                alert('Ops! Não foi possível apagar essa viagem no momento. Tente novamente mais tarde!')
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
            {listOfTrips.map((trip) => {
                const { name, planet, date, durationInDays, description, id } = trip
                return <TripCardAdmin
                    getTripDetail={() => getTripDetail(id)}
                    name={name}
                    planet={planet}
                    date={date}
                    duration={durationInDays}
                    description={description}
                    deleteTrip={() => deleteTrip(name, id)}
                />
            })}
        </ListOfTripsContent>
    </MainContainer>
}