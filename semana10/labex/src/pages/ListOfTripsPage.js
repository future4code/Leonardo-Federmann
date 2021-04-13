import React from 'react'
import { useHistory } from 'react-router-dom'
import { goBack, goToApplicationForm } from '../Coordination/Coordination'
import { useGetTrips } from '../Custom Hooks/useGetTrips'
import { useControlledInput } from '../Custom Hooks/useControlledInput'
import TripCard from '../Components/TripCard'
import Filters from '../Components/Filters'
import { MainContainer, Header, HeaderButtonsContainer, ListOfTripsContent, FiltersContainer, ListOfTrips } from './style'

export default function ListOfTripsPage() {
    const history = useHistory()
    const listOfTrips = useGetTrips()
    const keyWord = useControlledInput()
    const planet = useControlledInput()
    const date = useControlledInput()
    const duration = useControlledInput()
    const filter = (e) =>{
        console.log(e.target.value)
    }
    return <MainContainer>
        <Header>
            <h2>Labe X</h2>
            <HeaderButtonsContainer>
                <p onClick={() => goBack(history)}>Voltar</p>
                <p onClick={() => goToApplicationForm(history)}>Inscrição</p>
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
                    const { name, planet, date, durationInDays, description } = trip
                    return <TripCard
                        name={name}
                        planet={planet}
                        date={date}
                        duration={durationInDays}
                        description={description}
                    />
                })}
            </ListOfTrips>
        </ListOfTripsContent>
    </MainContainer>
}