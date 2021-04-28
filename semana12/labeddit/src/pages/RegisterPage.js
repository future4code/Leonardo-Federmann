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

    const register = async (e) => {
        e.preventDefault()
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
            <LoginAndRegisterForm onSubmit={register}>
                <StyledTextField
                    label="Nome de usuário"
                    color="secondary"
                    name="username"
                    value={form.username}
                    onChange={handleValues}
                    type="text"
                    required
                    inputProps={{pattern: '^.{3,}$', title:'O nome de usuário deve ter no mínimo 3 caracteres.'}}
                />
                <StyledTextField
                    label="Email"
                    color="secondary"
                    name="email"
                    value={form.email}
                    onChange={handleValues}
                    type="email"
                    required
                />
                <StyledTextField
                    label="Senha"
                    color="secondary"
                    name="password"
                    value={form.password}
                    onChange={handleValues}
                    type="password"
                    required
                    inputProps={{pattern: '^.{5,}$', title:'A senha deve ter no mínimo 5 caracteres, sendo permitidos espaços e caracteres especiais.'}}
                />
                <div>
                    <Button color="primary" variant="contained" onClick={() => goToLogin(history)}>Ir para Login</Button>
                    <Button color="primary" variant="contained" type="submit">Cadastrar</Button>
                </div>
            </LoginAndRegisterForm>
        </LoginAndRegisterContainer>
    )
}