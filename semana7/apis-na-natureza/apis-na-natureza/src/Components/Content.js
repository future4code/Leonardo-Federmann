import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
height: 80vh;
background-image:url('https://2.bp.blogspot.com/-x6x3AedJAdU/T1Sy9yp72GI/AAAAAAAAEE4/k7xUe3E4FxY/s1600/Oceano+Pac%C3%ADfico+Visto+do+espa%C3%A7o+-+Vis%C3%A3o+do+Espa%C3%A7o+-+View+of+Pacific+Ocean+from+Space.jpg');
color:white;
display:flex;
flex-direction: column;
align-items: center;
font-family: Arial;
`
const Text = styled.section`
display:flex;
flex-direction: column;
align-items: center;
`

const Table = styled.table`
width:70%;
`
const TableTitles = styled.th`
text-align: right;
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const Hiperlinks = styled.section`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
`

const GoToAnotherSite = styled.a`
cursor: pointer;
text-decoration: none;
color: white;
background-color: black;
padding: 7px;
border: 1px solid white;
border-radius: 20px 0;
`

const SmallText = styled.td`

`
const TableRow = styled.tr`

`

export default class Content extends React.Component {

    render() {
        return (
            <MainContainer>
                {this.props.aMissionWasChosen === false ?
                    <h1>Choose a mission and enjoy the reading!</h1>
                    :
                    <Text>
                        <h1>{this.props.missionName}</h1>
                        <br></br>
                        <Table>
                            <TableRow>
                                <TableTitles>Mission:</TableTitles>
                                <SmallText>{this.props.missionName}</SmallText>
                            </TableRow>
                            <TableRow>
                                <TableTitles>Manufacturer:</TableTitles>
                                <SmallText>{this.props.missionManufacturer}</SmallText>
                            </TableRow>
                            <TableRow>
                                <TableTitles>Description:</TableTitles>
                                <td>{this.props.missionDescription}</td>
                            </TableRow>
                        </Table>
                        <br></br>
                        <Hiperlinks>
                            <GoToAnotherSite target="_blank" href={this.props.missionWebsite}><b>{this.props.missionName}'s Website</b></GoToAnotherSite>
                            <GoToAnotherSite target="_blank" href={this.props.missionTwitter}><b>{this.props.missionName}'s Twitter</b></GoToAnotherSite>
                        </Hiperlinks>
                    </Text>
                }
            </MainContainer>
        );
    }
}