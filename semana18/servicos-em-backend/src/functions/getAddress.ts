import axios from 'axios'
import {address} from '../types'

export default async function getAddress (CEP:string):Promise<address | null>{
    try{
        const info = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
        if(info.data.erro){
            return null
        }else{
        const address_info:address = {
            street: info.data.logradouro,
            neighborhood: info.data.bairro,
            city: info.data.localidade,
            state: info.data.uf
        }
        return address_info
    }
    }catch(error){
        return null
    }
}