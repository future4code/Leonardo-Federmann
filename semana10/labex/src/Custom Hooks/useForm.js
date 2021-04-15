import {useState} from 'react'

export const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)
    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }
    const resetForm = () =>{
        setForm(initialState)
    }
    return [form, handleChange, resetForm]
}