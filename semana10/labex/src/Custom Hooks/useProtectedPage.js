import { useEffect} from 'react'

export const useProtectedPage = (history) => {
    const token = window.localStorage.getItem('token')
    useEffect(()=>{
        if(!token){
            history.push("/login")
        }
    }, [token, history])
}