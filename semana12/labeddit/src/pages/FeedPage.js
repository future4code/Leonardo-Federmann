import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { goToLogin, goBack } from '../coordinator/Coordinator'
import { FeedAndPostContainer } from '../style/style'
import Header from '../components/Header'
import Post from '../components/Post'

export default function FeedPage() {
    const history = useHistory()

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            goToLogin(history)
        }
    }, [])

    const logout = () => {
        window.localStorage.removeItem('token')
        goToLogin(history)
    }

    return (
        <FeedAndPostContainer>
            <Header>
                <Button color="secondary" size="small" variant="contained" onClick={() => goBack(history)}>Voltar</Button>
                <Button color="secondary" size="small" variant="contained" onClick={logout}>LogOut</Button>
            </Header>
            <Post />
        </FeedAndPostContainer>
    )
}
