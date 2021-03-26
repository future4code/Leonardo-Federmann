import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Playlists from './Components/Playlists'

export default class App extends React.Component {

  state = {
    renderedPage: 'home',
  }

  goToPlaylists = () => {
    this.setState({ renderedPage: 'playlists' })
  }

  goToHome = () => {
    this.setState({ renderedPage: 'home' })
  }

  render() {

    let header
    let content
    switch (this.state.renderedPage) {
      case 'home':
        header = <Header
          goToPage={this.goToPlaylists}
          whichPage={'Ver playlists'}
        />
        content = <Home
        />
        break;
      case 'playlists':
        header = <Header
          goToPage={this.goToHome}
          whichPage={'Voltar para home'}
        />
        content = <Playlists
        />
        break;

      default:
        break;
    }

    return (
      <div >
        {header}
        {content}
      </div>
    );
  }
}
