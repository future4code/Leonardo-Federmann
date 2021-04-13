import {useState, useEffect} from 'react'
import axios from 'axios'

export const useGetTrips = () =>{
    const [trips, setTrips] = useState([])
    useEffect(()=>{
        getAllTrips()
    }, [])
    const getAllTrips = async() =>{
        try{
            let listOfTrips = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/trips`)
            setTrips(listOfTrips.data.trips)
        }catch(error){
            alert('Ops! Ocorreu um erro no site, mas já estamos trabalhando para que você continue explorando os mistérios do espaço!')
        }
    }
    return trips
}