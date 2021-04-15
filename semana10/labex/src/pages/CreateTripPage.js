import React, { useState } from 'react'
import axios from 'axios'
import { useProtectedPage } from '../Custom Hooks/useProtectedPage'
import { useControlledInput } from '../Custom Hooks/useControlledInput'
import { usePlanetsArray } from '../Custom Hooks/usePlanetsArray'
import { useForm } from '../Custom Hooks/useForm'
import { useHistory } from 'react-router-dom'
import { goBack } from '../Coordination/Coordination'
import { MainContainer, Header, HeaderButtonsContainer } from './style'

export default function CreateTripPage() {
    const token = window.localStorage.getItem('token')
    const history = useHistory()
    const planets = usePlanetsArray()
    const [form, handleChange, resetForm] = useForm({name:'', planet:'Mercúrio', date:'', duration:'', description:''})
    useProtectedPage(history)
    const logOut = () => {
        window.localStorage.removeItem('token')
        history.push('/login')
    }
    const createTrip = async (e) => {
        e.preventDefault()
        try {
            console.log(form)
            const newTrip = {
                name: form.name,
                planet: form.planet,
                date: form.date,
                description: form.description,
                durationInDays: form.duration,
            }
            await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips`, newTrip, {
                headers: {
                    auth: token,
                }
            })
            alert('Viagem criada com sucesso! Boa exploração espacial!')
            resetForm()
        } catch (error) {
            alert('Ops! Ocorreu um problema no sistema, tenta criar sua viagem mais tarde! =)')
            console.log(error.response)
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
        <form onSubmit={createTrip}>
            <input 
            type="text" 
            placeholder="Título da viagem" 
            value={form.name} 
            onChange={handleChange}
            name="name" 
            required
            pattern="^.{5,}$"
            title="Digite no mínimo 5 letras."
            />
            <select onChange={handleChange} value={form.planet} name="planet">
                <option selected disabled value="Planeta">Planeta</option>
                {planets.map((planet) => {
                    return <option key={planet} value={planet}>{planet}</option>
                })}
            </select>
            <input 
            type="date" 
            placeholder="Data de início" 
            value={form.date} 
            onChange={handleChange}
            name="date"
            required
            />
            <input
             type="number" 
             placeholder="Duração em dias" 
             value={form.duration} 
             onChange={handleChange}
             name="duration" 
             required
             min={50}
             title="Duração mínima de 50 dias."
             />
            <input 
            type="text" 
            placeholder="Descrição" 
            value={form.description} 
            onChange={handleChange}  
            name="description"
            required
            pattern="^.{30,}$"
            title="Digite no mínimo 30 caracteres."
            />
            <button>Criar viagem</button>
        </form>
    </MainContainer>
}