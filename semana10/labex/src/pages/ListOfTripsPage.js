import React from 'react'
import { useHistory } from 'react-router-dom'
import { goBack, goToApplicationForm } from '../Coordination/Coordination'
import { useGetTrips } from '../Custom Hooks/useGetTrips'
import TripCard from '../Components/TripCard'
import { MainContainer, Header, HeaderButtonsContainer, ListOfTripsContent } from './style'

export default function ListOfTripsPage() {
    const history = useHistory()
    const listOfTrips = useGetTrips()
    return <MainContainer>
        <Header>
            <h2>Labe X</h2>
            <HeaderButtonsContainer>
                <p onClick={() => goBack(history)}>Voltar</p>
                <p onClick={() => goToApplicationForm(history)}>Inscrição</p>
            </HeaderButtonsContainer>
        </Header>
        <ListOfTripsContent>
                {listOfTrips.map((trip) => {
                    const { name, planet, date, durationInDays, description } = trip
                    return <TripCard
                        name={name}
                        planet={planet}
                        date={date}
                        duration={durationInDays}
                        description={description}
                    />
                })}
        </ListOfTripsContent>
    </MainContainer>
}