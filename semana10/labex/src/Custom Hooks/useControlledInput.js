import {useState, useEffect} from 'react'

export const useControlledInput = () =>{
    const [inputValue, setInputValue] = useState('')
    const handleInputValue = (e) =>{
        setInputValue(e.target.value)
    }
    return [inputValue, handleInputValue]
}