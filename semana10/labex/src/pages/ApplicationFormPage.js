import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useForm} from '../Custom Hooks/useForm'
import {useGetTrips} from '../Custom Hooks/useGetTrips'
import {useCountries} from '../Custom Hooks/useCountries'
import {goBack, goToListOfTrips} from '../Coordination/Coordination'
import { MainContainer, Header, HeaderButtonsContainer } from './style'

export default function ApplicationFormPage(){
    const history = useHistory()
    const countries = useCountries()
    const listOfTrips = useGetTrips()
    const [form, handleChange, resetForm] = useForm({name:'', trip:'', age:'', country:'', profession: '', applicationText:''})
    const applyToTrip = async(e) =>{
        e.preventDefault()
        try{
            const candidate = {
                name: form.name,
                age: form.age,
                applicationText: form.applicationText,
                profession: form.profession,
                country: form.country
            }
            await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips/${form.trip}/apply`, candidate)
            alert('Incrição realizada com sucesso!')
            resetForm()
        }catch(error){
            alert('Ops! Ocorreu um erro no sistema, mas já estamos trabalhando para que você continue suas aventuras espaciais!')
            console.log(error.response)
        }
    }

    return <MainContainer>
        <Header>
            <h2>Labe X</h2>
            <HeaderButtonsContainer>
                <p onClick={() => goBack(history)}>Voltar</p>
                <p onClick={()=>goToListOfTrips(history)}>Lista de viagens</p>
            </HeaderButtonsContainer>
        </Header>
        <form onSubmit={applyToTrip}>
            <input 
            value={form.name} 
            onChange={handleChange} 
            name="name" 
            placeholder="Nome" 
            required 
            type="text"
            pattern="[ a-zA-Z]{3,}$"
            title="Favor inserir no mínimo três letras."
            />
            <input 
            value={form.age} 
            onChange={handleChange} 
            name="age" 
            placeholder="Idade" 
            required 
            type="number"
            min={18}
            // pattern="[a-zA-Z]{3,}"
            // title="Favor inserir no mínimo três letrar no nome"
            />
            <select onChange={handleChange} value={form.country} name="country">
                <option value="País" selected disabled>País</option>
                {countries.map((country)=>{
                    return <option value={country}>{country}</option>
                })}
            </select>
            <input 
            value={form.profession} 
            onChange={handleChange} 
            name="profession" 
            placeholder="Profissão" 
            required 
            type="text"
            pattern="[ a-zA-Z]{10,}$"
            title="Favor inserir somente letras e no mínimo 10 caracteres."
            />
            <select onChange={handleChange} value={form.trip} name="trip">
                <option value="Escolha uma viagem" selected disabled>Escolha uma viagem</option>
                {listOfTrips.map((trip)=>{
                    return <option value={trip.id}>{trip.name}</option>
                })}
            </select>
            <input
            value={form.applicationText} 
            onChange={handleChange} 
            name="applicationText" 
            placeholder="Escreva um pouco sobre você e o que leva a querer viajar pelo espaço..." 
            required 
            type="text"
            pattern="^.{30,}$"
            title="Favor inserir somente letras e números e no mínimo 30 caracteres."
            />
            <button>Enviar</button>
        </form>
    </MainContainer>
}