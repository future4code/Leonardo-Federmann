import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainContainer = styled.header`
display: flex;
flex-direction: column;
align-items: center;
`

const NewTrack = styled.section`
background-color: aqua;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 170px;
padding: 10px;
margin: 10px;
`

const InputNewTrack = styled.input`

`

const Button = styled.button`

`

export default class PlaylistDetails extends React.Component {

    state = {
        newTrackName: '',
        newTrackArtist: '',
        newTrackLink: '',
        aMusicWasAdded: false,
        listOfTracks: [],
    }

    handleNewTrackName = (e) => {
        this.setState({ newTrackName: e.target.value })
    }

    handleNewTrackArtist = (e) => {
        this.setState({ newTrackArtist: e.target.value })
    }

    handleNewTrackLink = (e) => {
        this.setState({ newTrackLink: e.target.value })
    }

    getMusicsFromPlaylist = (id) =>{
        this.setState({aMusicWasAdded: true})
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers:{
                Authorization: 'leonardo-federmann-cruz'
            }
        }).then((tracks)=>{
            this.setState({listOfTracks: tracks.data.result.tracks})
        }).catch((error)=>{
        alert('Ocorreu um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.')
    })
}

    addToPlaylist = async(id) =>{
        try{
            let body = {
                name: this.state.newTrackName,
                artist: this.state.newTrackArtist,
                url: this.state.newTrackLink
            }
            let newTrack = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body,{
                headers:{
                    Authorization: 'leonardo-federmann-cruz'
                }
            })
            alert('Playlist adicionada com sucesso!')
            this.setState({newTrackName:'', newTrackArtist: '', newTrackLink: ''})
            this.getMusicsFromPlaylist(id)
        }catch(error){
            if(error.response.status===400){
                alert('Essa música já existe na sua playlist')
            } else{
                alert('Ocorreu um erro no sistema e estamos trabalhando para corrigi-lo. Por favor, tente novamente mais tarde.')
            }
        }
    }

    render() {
        let newListOfTrack = this.state.listOfTracks.map((track) => {
            return <tr key={track.id}>
                <td>{track.name}</td>
                <audio src={track.url} controls></audio>
            </tr>
        })
        return (
            <MainContainer >
                <h1>Detalhes da playlist {this.props.playlistName}</h1>
                <button onClick={this.props.goToList}>Voltar para a lista de playlists</button>
                <NewTrack>
                    <h3>Adicionar uma nova música à playlist {this.props.playlistName}</h3>
                    <div>
                        <label>Música: </label>
                        <InputNewTrack placeholder="Ex: Shape of You" value={this.state.newTrackName} onChange={this.handleNewTrackName} />
                    </div>
                    <div>
                        <label>Artista: </label>
                        <InputNewTrack placeholder="Ex: Ed Sheeran" value={this.state.newTrackArtist} onChange={this.handleNewTrackArtist} />
                    </div>
                    <div>
                        <label>URL: </label>
                        <InputNewTrack placeholder="Ex: www.shapeofyou.mp3" value={this.state.newTrackLink} onChange={this.handleNewTrackLink} />
                    </div>
                    <Button onClick={()=>this.addToPlaylist(this.props.playlistId)}>Adicionar à playlist</Button>
                </NewTrack>
                { this.state.aMusicWasAdded===false ?
                <table>{this.props.listOfTracks}</table>
                :
                <table>{newListOfTrack}</table>
                }
            </MainContainer>
        );
    }
}