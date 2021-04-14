import React, {useState} from 'react'
import axios from 'axios'
import {useProtectedPage} from '../Custom Hooks/useProtectedPage'
import {useControlledInput} from '../Custom Hooks/useControlledInput'
import {usePlanetsArray} from '../Custom Hooks/usePlanetsArray'
import {useHistory} from 'react-router-dom'
import {goBack} from '../Coordination/Coordination'
import { MainContainer, Header, HeaderButtonsContainer } from './style'

export default function CreateTripPage(){
    const token = window.localStorage.getItem('token')
    const [chosenPlanet, setChosenPlanet] = useState('') 
    const history=useHistory()
    const nameOfTrip = useControlledInput()
    const date = useControlledInput()
    const duration = useControlledInput()
    const description = useControlledInput()
    const planets = usePlanetsArray()
    useProtectedPage(history)
    const logOut = () =>{
        window.localStorage.removeItem('token')
        history.push('/login')
    }
    const choosePlanet = (e) =>{
        setChosenPlanet(e.target.value)
    }
    const createTrip = async()=>{
        const newTrip = {
            name: nameOfTrip[0],
            planet: chosenPlanet,
            date: date[0],
            description: description[0],
            durationInDays: duration[0],
        }
        try{
            await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips`, newTrip, {
                headers:{
                    auth: token,
                }
            })
            alert('Viagem criada com sucesso! Boa exploração espacial!')
            setChosenPlanet('')
        }catch(error){
            alert(error)
        }
    }
    return <MainContainer>
        <Header>
            <h2>Labe X</h2>
            <HeaderButtonsContainer>
                <p onClick={() => goBack(history)}>Voltar</p>
                <p onClick={logOut}>Log Out</p>
            </HeaderButtonsContainer>
        </Header>
            <input type="text" placeholder="Título da viagem" value={nameOfTrip[0]} onChange={nameOfTrip[1]} />
            <select onChange={choosePlanet}>
                <option selected disabled>Planeta</option>
                {planets.map((planet)=>{
                    return <option value={planet}>{planet}</option>
                })}
            </select>
            <input type="date" placeholder="Data de início" value={date[0]} onChange={date[1]} />
            <input type="number" placeholder="Duração em dias" value={duration[0]} onChange={duration[1]} />
            <textarea type="text" placeholder="Descrição" value={description[0]} onChange={description[1]} col="10" row="100" />
            <button onClick={createTrip}>Criar viagem</button>
        </MainContainer>
}