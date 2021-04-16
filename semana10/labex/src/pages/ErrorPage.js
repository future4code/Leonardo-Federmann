import React from 'react'
import { ErrorContainer } from './style'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../Coordination/Coordination'

export default function ErrorPage() {
    const history = useHistory()
    return <ErrorContainer>
        <h1>ERRO</h1>
        <p>Ops! Parece que o link digitado não existe, mas você pode ir para a nossa Home, lá você vai encontrar todas as orientações necessárias.</p>
        <button onClick={() => goToHome(history)}>Ir para Home</button>
    </ErrorContainer>
}