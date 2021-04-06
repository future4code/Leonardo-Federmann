import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Home from './Components/Home'
import UsersInformation from './Components/UsersInformation'
import UserDetails from './Components/UserDetails'


export default class App extends React.Component {
  state = {
    selectedScreen: 'home',
    name: '',
    email: '',
  }

  goToList = () => {
    this.setState({ selectedScreen: 'usersInformation' })
  }

  goToHome = () => {
    this.setState({ selectedScreen: 'home' })
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  createUser = () => {
    let newUser = {
      name: this.state.name,
      email: this.state.email
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', newUser, {
      headers: {
        Authorization: 'leonardo-federmann-cruz'
      }
    }).then(() => {
      alert(`Usuáro ${newUser.name} criado com sucesso com o email ${newUser.email}!`)
      this.setState({ name: '', email: '' })
    }).catch((error) => {
      alert('Favor digitar um email válido')
    })
  }

  render() {

    let renderedScreen = ''
    switch (this.state.selectedScreen) {
      case 'home':
        renderedScreen = <Home
          goToList={this.goToList}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          name={this.state.name}
          email={this.state.email}
          createUser={this.createUser}
        />
        break
      case 'usersInformation':
        renderedScreen = <UsersInformation
          goToHome={this.goToHome}
        />
        break
      case 'userDetails':
        renderedScreen = <UserDetails
          name={'josé'}
          email={'hehehehe'}
        />
        break
      default: break
    }

    return <div>
      {renderedScreen}
    </div>
  }
}


