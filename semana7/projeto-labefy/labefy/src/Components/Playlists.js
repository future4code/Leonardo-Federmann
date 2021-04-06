import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PlaylistDetails from './PlaylistDetails'

const MainContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export default class Playlists extends React.Component {

    state = {
        listOfPlaylists: [],
        checkingAPlaylist: false,
        listOfTracks: [],
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try {
            let playlists = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
                headers: {
                    Authorization: 'leonardo-federmann-cruz'
                }
            })
            this.setState({ listOfPlaylists: playlists.data.result.list })
        } catch (error) {
            alert('Ocorreu um erro no sistema e estamos trabalhos para corrigi-lo. Por favor, tente novamente mais tarde.')
        }
    }

    deletePlaylist = async (playlist) => {
        try {
            let newList = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`, {
                headers: {
                    Authorization: 'leonardo-federmann-cruz'
                }
            })
            this.getAllPlaylists()
        } catch (error) {
            alert(`Ocorreu um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.`)
            console.log(error.response.data)
        }
    }

    goToList = () => {
        this.setState({ checkingAPlaylist: false })
    }

    render() {
        let renderedListOfTrack = this.state.listOfTracks.map((track) => {
            return <tr key={track.id}>
                <td>{track.name}</td>
                <td>{track.artist}</td>
                <audio src={track.url} controls></audio>
            </tr>
        })

        let checkPlaylist = (playlist) => {
            let playlistDetails = <PlaylistDetails
                playlistName={playlist.name}
                playlistId={playlist.id}
                goToList={this.goToList}
                listOfTracks={renderedListOfTrack}
            />
            this.setState({ pageOfDetails: playlistDetails, checkingAPlaylist: true })
        }

        let renderedListOfPlaylists = this.state.listOfPlaylists.map((playlist) => {
            return <tr key={playlist.id}>
                <td>{playlist.name}</td>
                <td><button onClick={() => checkPlaylist(playlist)}>Ver playlist</button></td>
                <td><button onClick={() => this.deletePlaylist(playlist)}>Excluir</button></td>
            </tr>

        })
        return (
            <MainContainer >
                {this.state.listOfPlaylists.length === 0 ?
                    <p>Carregando...</p>
                    : this.state.checkingAPlaylist ?
                        <div>{this.state.pageOfDetails}</div>
                        :
                        <div>
                            <h1>Playlists</h1>
                            <table>{renderedListOfPlaylists}</table>
                        </div>
                }
            </MainContainer>
        );
    }
}