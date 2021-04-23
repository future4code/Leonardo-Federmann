import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../Custom Hooks/useForm'
import { goToHome } from '../Coordination/Coordination'
import axios from 'axios'
import { LoginContainer, Login } from './style'

export default function LoginPage() {
    const [form, handleChange ] = useForm({ email: '', password: '' })
    const history = useHistory()

    const login = async (event) => {
        event.preventDefault()
        try {
            const user = {
                email: form.email,
                password: String(form.password),
            }
            let loginSuccess = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-federmann-cruz/login`, user)
            window.localStorage.setItem('token', loginSuccess.data.token)
            history.push("/admin/trips/list")
        } catch (error) {
            alert('Usuário inválido ou senha incorreta.')
        }
    }

    return <LoginContainer>
        <Login>
            <h3>Login</h3>
            <form onSubmit={login}>
                <input value={form.email} onChange={handleChange} name="email" required type="email" />
                <input value={form.password} onChange={handleChange} name="password" required type="password" />
                <button>Login</button>
            </form>
        </Login>
        <Login>
            <h1>Labe X</h1>
            <button onClick={() => goToHome(history)}>Voltar</button>
        </Login>
    </LoginContainer>
}