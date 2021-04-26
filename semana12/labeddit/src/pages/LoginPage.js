import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { LoginAndRegisterForm, StyledTextField, LoginAndRegisterContainer, LogoContainer } from '../style/style'
import { useForm } from '../custom hooks/useForm'
import {goToFeed, goToRegister} from '../coordinator/Coordinator'

export default function LoginPage() {
    const history = useHistory()
    const [form, setForm, handleValues] = useForm({ email: '', password: '' })

    useEffect(()=>{
        if(window.localStorage.getItem('token')){
            goToFeed(history)
        }
    }, [])

    const login = async() => {
        const user = {
            email: form.email,
            password: form.password
        }
        try{
            const loggedUser = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`, user)
            window.localStorage.setItem('token', loggedUser.data.token)
            goToFeed(history)
        }catch(error){
            console.log(user)
            alert('Usuário ou senha incorreto.')
        }
    }

    return (
        <LoginAndRegisterContainer>
            <LogoContainer>
                <h1>Labeddit</h1>
            </LogoContainer>
            <LoginAndRegisterForm>
                <StyledTextField
                    label="Email"
                    color="primary"
                    name="email"
                    value={form.email}
                    onChange={handleValues}
                />
                <StyledTextField
                    label="Senha"
                    color="primary"
                    name="password"
                    value={form.password}
                    onChange={handleValues}
                />
                <div>
                    <Button color="primary" variant="contained" onClick={()=>goToRegister(history)}>Cadastre-se</Button>
                    <Button color="primary" variant="contained" onClick={login}>Login</Button>
                </div>
            </LoginAndRegisterForm>
        </LoginAndRegisterContainer>
    )
}