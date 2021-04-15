import {useEffect, useState} from 'react'
import axios from 'axios'

export const useCountries = () =>{
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        getCountries()
    }, [])
    const getCountries = async() =>{
        try{
            let countriesList = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome`)
            let countriesNames = countriesList.data.map((country)=>{
                return country.nome
            })
            setCountries(countriesNames)
        }catch(error){
            alert('Ops! Ocorreu um erro no sistema, mas já estamos trabalhando para que você continue suas aventuras espaciais!')
        }
    }
    return countries
}