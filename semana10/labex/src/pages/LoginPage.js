import React from 'react'
import {useHistory} from 'react-router-dom'
import {useControlledInput} from '../Custom Hooks/useControlledInput'
import {goBack} from '../Coordination/Coordination'
import axios from 'axios'
import {HeaderButtonsContainer, LoginContainer, Login} from './style'

export default function LoginPage(){
    const userEmail = useControlledInput()
    const password = useControlledInput()
    const history = useHistory()
    const login = async() =>{
        try{
            const user = {
                email: userEmail[0],
                password: String(password[0]),
            }
            let loginSuccess = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/login`, user)
            window.localStorage.setItem('token', loginSuccess.data.token)
            history.push("/admin/trips/list")
        }catch(error){
            alert('Usuário inválido ou senha incorreta.')
        }
    }
    return <LoginContainer>
        <Login>
        <h3>Login</h3>
        <input value={userEmail[0]} onChange={userEmail[1]}></input>
        <input value={password[0]} onChange={password[1]}></input>
        <HeaderButtonsContainer>
            <button onClick={()=>goBack(history)}>Voltar</button>
            <button onClick={login}>Login</button>
        </HeaderButtonsContainer>
        </Login>
        <Login>
            <h1>Labe X</h1>
        </Login>
    </LoginContainer>
}