import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { goToLogin, goBack } from '../coordinator/Coordinator'
import { FeedAndPostContainer } from '../style/style'
import Header from '../components/Header'
import Post from '../components/Post'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'

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
            <Post 
            userName='Nome do usuário'
            text=' aaaaaaaaaaaaaa aaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaa aaaaa'
            numberOfLikes={200}
            likeIcon={likeIcon}
            deslikeColor={'white'}
            numberOfDeslikes={100}
            numberOfComments={900}
            />
        </FeedAndPostContainer>
    )
}
