import React from 'react'
import axios from 'axios'
import Header from './Components/Header'
import Content from './Components/Content'

export default class App extends React.Component {

  state = {
    missions: [],
    aMissionWasChosen: false,
    chosenMission: {}
  }

  componentDidMount() {
    this.getAllMissions()
  }

  getAllMissions = async () => {
    try {
      let missions = await axios.get(`https://api.spacexdata.com/v3/missions`)
      this.setState({ missions: missions.data })
    } catch (error) {
      console.log(error)
    }
  }

  chooseOneMission = async (event) => {
    this.setState({ aMissionWasChosen: true })
    try {
      let chosenMission = await axios.get(`https://api.spacexdata.com/v3/missions/${event.target.value}`)
      console.log(chosenMission.data.twitter)
      this.setState({ chosenMission: chosenMission.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    let missionsNames = this.state.missions.map((mission) => {
      return <option key={mission.mission_id} value={mission.mission_id}>{mission.mission_name}</option>
    })
    return (
      <div>
        <Header
          options={missionsNames}
          chooseOneMission={this.chooseOneMission}
        />
        <Content
          aMissionWasChosen={this.state.aMissionWasChosen}
          missionName={this.state.chosenMission.mission_name}
          missionWebsite={this.state.chosenMission.website}
          missionTwitter={this.state.chosenMission.twitter}
          missionManufacturer={this.state.chosenMission.manufacturers}
          missionDescription={this.state.chosenMission.description}
        />
      </div>
    );
  }
}
