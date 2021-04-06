import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserDetails from './UserDetails'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class UsersList extends React.Component {
    state = {
        usersList: [],
        seeDetails: false,
        renderedScreen: '',
        searchField: '',
    }

    componentDidMount() {
        this.getAllUsers()
    }

    onChangeSearchField = (e) => {
        this.setState({ searchField: e.target.value })
    }

    getAllUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'leonardo-federmann-cruz'
            }
        }).then((list) => {
            console.log(list.data)
            this.setState({ usersList: list.data, searchField: '' })
        }).catch((error) => {
            alert('Ocorreu um erro no sistema e estamos trabalhando para resolver. Por favor, tente novamente mais tarde.')
        })
    }

    search = async () => {
        try {
            let searchedUser = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.searchField}`, {
                headers: {
                    Authorization: 'leonardo-federmann-cruz'
                }
            })
            this.setState({ usersList: searchedUser.data })
        } catch {
            alert('Houve um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.')
        }
    }

    deleteUser = (deletedUser) => {

        if (window.confirm(`Tem certeza de que deseja deletar o usuário ${deletedUser.name}?`)) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${deletedUser.id}`, {
                headers: {
                    Authorization: 'leonardo-federmann-cruz'
                }
            }).then(() => {
                this.getAllUsers()
            }).catch((error) => {
                alert('Ocorreu um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.')
            })
        }
    }

    returnToList = () => {
        console.log('a função de voltar para a lista está funcionando')
    }

    render() {

        let hideDetails = () => {
            this.setState({ seeDetails: false })
            this.getAllUsers()
        }

        let checkDetails = (user) => {
            console.log(user.email)
            let newPage = <UserDetails
                name={user.name}
                email={user.email}
                id={user.id}
                returnToList={hideDetails}
            />
            this.setState({ renderedScreen: newPage, seeDetails: true })
        }

        let list = this.state.usersList.map((user) => {
            return <p key={user.id}>{user.name} <button onClick={() => checkDetails(user)}>Ver detalhes</button>
                <button onClick={() => this.deleteUser(user)}>Deletar usuário</button></p>
        })

        return <MainContainer>
            {this.state.usersList.length === 0 ?
                <p>Carregando...</p> :
                this.state.seeDetails ?
                    <div>{this.state.renderedScreen}</div> :
                    <div>
                        <h1>Lista de usuários</h1>
                        <button onClick={this.props.goToHome}>Voltar para a Home</button>
                        <div><label for="search">Buscar: </label>
                            <input value={this.state.searchField} onChange={this.onChangeSearchField} id="search" placeholder="Buscar por nome"></input>
                            <button onClick={this.search}>Buscar</button>
                            <button onClick={this.getAllUsers}>Finalizar busca</button>
                        </div>
                        <hr></hr>
                        <div>{list}</div>
                    </div>}
        </MainContainer>
    }
}