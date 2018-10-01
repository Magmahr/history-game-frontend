import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Song from '../images/Honky_Tonkin.mp3'

export default class MusicPlayer extends Component {
  constructor(props) {
  super(props)
    this.state = {
      opacity: 'lowOpacity'
    }
  }

  // onHover = (event) => {
  //   console.log('hi')
  //   opacity = {
  //     opacity: 0.9
  //   }
  // }
  returnOpacity = () => {
    this.setState({ opacity: 'lowOpacity'})
  }

  onHover = (event) => {
    // event.preventDefault()
    console.log('hi')
    this.setState({ opacity: 'highOpacity'})
    setTimeout(() => this.returnOpacity(), 1000)
  }

  render() {
    return (
      <div onMouseOver={this.onHover} className={this.state.opacity}>
        <ReactAudioPlayer
          id='audioplayer'
          src={Song}
          controls

          loop={true}
        />
      </div>
    )
  }
}
