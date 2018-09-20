import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'

let introCounter = 0

class IntroBox extends Component {
  constructor(props) {
  super(props)

  this.state = {
    introBeat: this.props.intro[introCounter]
  }

  }

  render() {

    this.changeState = () => {
      introCounter += 1
      if (introCounter === 3) {
        this.setState({introBeat: this.props.intro[introCounter]})
      }
      this.setState({introBeat: this.props.intro[introCounter]})
    }

    // console.log(this.props);
    this.handleClick = (event) => {
      event.preventDefault()
      this.changeState()
      console.log(introCounter)
    }

    let storeCondition = store.getState()
    let characterTraitDecider = storeCondition.currentCharacter

    this.genderAndSmell = (gender, smell) => {
      return `You attempt to pass politely by but a ${gender} comes up to you smelling of ${smell}.`
    }

    this.firstCharacterHint = (characterTraitDecider) => {
      switch(characterTraitDecider) {
      case 'Napoleon':
        console.log("hi")
      break
      default:
        return this.genderAndSmell("man", "leather")
      }
    }
    //
    this.firstCharacterHint()

    console.log(characterTraitDecider)

    // console.log(this.props.questions.responses.response1);
    return (
      <div id="introbox">
        <p onClick={this.handleClick}>{this.state.introBeat}</p>
        <p>{this.firstCharacterHint()}</p>
      </div>
    )
  }
}

export default IntroBox
