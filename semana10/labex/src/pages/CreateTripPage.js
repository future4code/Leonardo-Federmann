import React from 'react'
import axios from 'axios'
import { useProtectedPage } from '../Custom Hooks/useProtectedPage'
import { usePlanetsArray } from '../Custom Hooks/usePlanetsArray'
import { useForm } from '../Custom Hooks/useForm'
import { useHistory } from 'react-router-dom'
import { goBack } from '../Coordination/Coordination'
import { FormContainer } from './style'

export default function CreateTripPage() {
    const token = window.localStorage.getItem('token')
    const history = useHistory()
    const planets = usePlanetsArray()
    const [form, handleChange, resetForm] = useForm({ name: '', planet: 'Mercúrio', date: '', duration: '', description: '' })
    useProtectedPage(history)

    const logOut = () => {
        window.localStorage.removeItem('token')
        history.push('/login')
    }

    const createTrip = async (e) => {
        e.preventDefault()
        let dateArray = form.date.split('-')
        let date = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
        try {
            const newTrip = {
                name: form.name,
                planet: form.planet,
                date: date,
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
        }
    }

    const currentDate = () => {
        const today = new Date().toISOString().split('T')
        return today[0]
    }

    return <FormContainer>
        <header>
            <button onClick={() => goBack(history)}>Voltar</button>
            <h2>Labe X</h2>
            <button onClick={logOut}>Log Out</button>
        </header>
        <h3>Parabéns! O primeiro passo para criar sua própria viagem espacial já foi dado! Agora, conte um pouco mais sobre o que você tem em mente e para onde você quer ir:</h3>
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
                min={currentDate()}
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
    </FormContainer>
}