import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

const InputPlaylist = styled.input`
width: 30%;
`

const Button = styled.button`
color: white;
background-color: black;
margin-top: 10px;
`

export default class Home extends React.Component {

    state = {
        newPlaylist: '',
    }

    handleNewPlaylist = (e) => {
        this.setState({ newPlaylist: e.target.value })
    }

    createPlaylist = async () => {
        if (this.state.newPlaylist === '') {
            alert('Favor inserir um nome para a playlist')
        } else {
            try {
                let body = {
                    name: this.state.newPlaylist,
                }
                let newPlaylist = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, {
                    headers: {
                        Authorization: 'leonardo-federmann-cruz'
                    }
                })
                alert(`Playlist ${this.state.newPlaylist} criada com sucesso!`)
                this.setState({ newPlaylist: '' })
            } catch (error) {
                error.response.status === 400 ?
                    alert('Já existe uma playlist com esse nome. Crie uma playlist com um nome diferente.') :
                    alert('Ocorreu um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.')
            }
        }
    }

    render() {
        return (
            <MainContainer >
                <h1>Home</h1>
                <p>Bora curtir um som? Digite o nome de uma playlists que você queira criar:</p>
                <InputPlaylist placeholder="Digite o nome da nova playlist" value={this.state.newPlaylist} onChange={this.handleNewPlaylist} />
                <Button onClick={this.createPlaylist}>Criar playlist</Button>
            </MainContainer>
        );
    }
}