import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserDetails from './UserDetails'
import UsersList from './UsersList'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class UsersInformation extends React.Component {
    state = {
        seeDetails: false,
    }

    render() {
        let checkDetails = () => {
            console.log('deu bom')
        }

        let renderedScreen = <UsersList
            goToHome={this.props.goToHome}
            checkDetails={checkDetails}
        />

        return <MainContainer>
            {renderedScreen}
        </MainContainer>
    }
}