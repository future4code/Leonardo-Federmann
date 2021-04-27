import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { LoginAndRegisterForm, StyledTextField, LoginAndRegisterContainer, LogoContainer } from '../style/style'
import { goToFeed, goToLogin } from '../coordinator/Coordinator'
import { useForm } from '../custom hooks and functions/useForm'
import axios from 'axios'

export default function RegisterPage() {
    const history = useHistory()
    const [form, setForm, handleValues] = useForm({ username: '', email: '', password: '' })

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            goToFeed(history)
        }
    }, [])

    const register = async () => {
        const newUser = {
            email: form.email,
            password: form.password,
            username: form.username,
        }
        try {
            const newUserInfo = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup`, newUser)
            window.localStorage.setItem('token', newUserInfo.data.token)
            goToFeed(history)
        } catch (error) {
            alert(error.response.message)
        }
    }

    return (
        <LoginAndRegisterContainer>
            <LogoContainer>
                <h1>Labeddit</h1>
            </LogoContainer>
            <LoginAndRegisterForm>
                <StyledTextField
                    label="Nome de usuário"
                    color="primary"
                    name="username"
                    value={form.username}
                    onChange={handleValues}
                />
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
                    <Button color="primary" variant="contained" onClick={() => goToLogin(history)}>Ir para Login</Button>
                    <Button color="primary" variant="contained" onClick={register}>Cadastrar</Button>
                </div>
            </LoginAndRegisterForm>
        </LoginAndRegisterContainer>
    )
}