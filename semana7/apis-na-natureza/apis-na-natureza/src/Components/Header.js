import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.header`
background-color: black;
color: white;
height: 800px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
font-family: Arial;
`
const Logo = styled.img`
`

const Text = styled.section`
width: 70%;
text-align: center;
margin-bottom: 30px;
`

const MissionSelection = styled.select`
color: white;
background-color: black;
padding: 7px;
border: 1px solid white;
border-radius: 20px 0;
`

export default class Header extends React.Component {

    render() {
        return (
            <MainContainer>
                <Logo src={"https://www.cbj.ca/wp-content/uploads/2019/06/SpaceX.png"} alt='SpaceX logo' />
                <Text>
                    <h2>Welcome to the SpaceX's site of missions! Choose one of the space missions below and check some of it's incredible information!</h2>
                    <MissionSelection onChange={this.props.chooseOneMission}>
                        <option value="Choose a mission" selected disabled>Choose a mission</option>
                        {this.props.options}
                    </MissionSelection>
                </Text>
            </MainContainer>
        );
    }
}
