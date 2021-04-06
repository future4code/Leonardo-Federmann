import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class UserDetails extends React.Component {

    state = {
        editing: false,
        newName: '',
        newEmail: '',
        numberOfEditions: 0,
        changedName: '',
        changedEmail: '',
    }

    onChangeNewName = (e) => {
        this.setState({ newName: e.target.value })
    }

    onChangeNewEmail = (e) => {
        this.setState({ newEmail: e.target.value })
    }

    render() {

        let editUser = () => {
            this.setState({ editing: true })
        }

        let giveUpToEdit = () => {
            this.setState({ editing: false })
        }

        let saveNewValues = async (newName, newEmail, id) => {
            let newInfo = {
                name: newName,
                email: newEmail
            }
            try {
                const changeUser = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, newInfo, {
                    headers: {
                        Authorization: 'leonardo-federmann-cruz'
                    }
                })
                alert(`Novas informações salvas com sucesso!`)
                this.setState({ changedName: newInfo.name, changedEmail: newInfo.email, editing: false, newName: '', newEmail: '', numberOfEditions: this.state.numberOfEditions + 1 })
            } catch {
                alert(`Houve um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.`)
            }
        }

        return <MainContainer>
            {this.state.editing === true
                ?
                <div>
                    <h1>Detalhes do usuário {this.props.name}</h1>
                    <div>
                        <label for="newName">Novo nome: </label>
                        <input id="newName" value={this.state.newName} onChange={this.onChangeNewName} placeholder="Ex: Lucas Felipe" />
                    </div>
                    <div>
                        <label for="newEmail">Novo email: </label>
                        <input id="newEmail" value={this.state.newEmail} onChange={this.onChangeNewEmail} placeholder="Ex: lucao@gmail.com" />
                    </div>
                    <button onClick={() => saveNewValues(this.state.newName, this.state.newEmail, this.props.id)}>Salvar</button>
                    <button onClick={giveUpToEdit}>Desistir</button>
                </div>
                : this.state.numberOfEditions === 0
                    ?
                    <div>
                        <h1>Detalhes do usuário {this.props.name}</h1>
                        <p>Nome: {this.props.name}</p>
                        <p>Email: {this.props.email}</p>
                        <button onClick={editUser}>Editar</button>
                        <button onClick={this.props.returnToList}>Voltar para a lista</button>
                    </div>
                    :

                    <div>
                        <h1>Detalhes do usuário {this.state.changedName}</h1>
                        <p>Nome: {this.state.changedName}</p>
                        <p>Email: {this.state.changedEmail}</p>
                        <button onClick={editUser}>Editar</button>
                        <button onClick={this.props.returnToList}>Voltar para a lista</button>
                    </div>

            }
        </MainContainer>
    }
}