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
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'leonardo-federmann-cruz'
            }
        }).then((list) => {
            this.setState({ usersList: list.data })
        }).catch((error) => {
            alert('Ocorreu um erro no sistema e estamos trabalhando para resolver. Por favor, tente novamente mais tarde.')
        })
    }

    deleteUser = (deletedUser) => {

        //DESAFIO 1: confirmar com o usuário se ele deseja apagar o item da lista antes de fazê-lo:

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

    //DESAFIO 2: não foi concluída, mas deixei comitadas as linhas que criei na tentativa de resolvê-lo:

    // showDetails = (shownUser) => {

    // }

    // hideDetails = () => {
    //     this.setState({ seeDetails: false })
    // }

    render() {

        //     let renderedList=[]
        //     for(user of this.state.usersList){
        //         let showDetails = () => {
        //             this.setState({seeDetails: true})
        //         }
        //         let hideDetails = () => {
        //         this.setState({ seeDetails: false })
        //         if(this.state.seeDetails===false){
        //             renderedList.push(<p>{user.name} <button onClick={showDetails}>Ver detalhes</button> <button onClick={() => this.deleteUser(user)}>Deletar usuário</button></p>)
        //         } else{
        //             <UserDetails 
        //             name={user.name}
        //             email={user.email}
        //             returnToList={hideDetails}
        //             />
        //         }
        // }

        // }
        let renderedList = this.state.usersList.map((user) => {
            // let seeDetails=false
            // let showDetails = () => {
            //     seeDetails= true 
            //     console.log(seeDetails)
            // }

            // let hideDetails = () => {
            //     seeDetails= false
            // }
            // if(seeDetails===false){
            return <p>{user.name} <button onClick={() => this.deleteUser(user)}>Deletar usuário</button></p>
            // }else{
            //     return<li>{user.name} <button onClick={hideDetails}>Ocultar</button>
            //     <UserDetails 
            //     name={user.name}
            //     email={user.email}
            //     />
            //     </li>
            // }
        })
        return <MainContainer>
            <h1>Lista de usuários</h1>
            <button onClick={this.props.goToHome}>Voltar</button>
            <hr></hr>
            {this.state.usersList.length > 0 ?
                <div>{renderedList}</div> :
                <p>Carregando...</p>
            }
        </MainContainer>
    }
}