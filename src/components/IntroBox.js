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
      this.setState({introBeat: this.props.intro[introCounter]})
      console.log(this.state.introBeat);
    }

    // console.log(this.props);
    this.handleClick = (event) => {
      event.preventDefault()
      this.changeState()
      console.log(introCounter)
      // if (introCounter === 4) {
      //   this.firstCharacterHint(characterTraitDecider)
      // }
    }

    // let firstHint = this.firstCharacterHint(characterTraitDecider)
    let storeCondition = store.getState()
    let characterTraitDecider = storeCondition.currentCharacter

    this.genderAndSmell = (gender, smell) => {
      return `You attempt to pass politely by but a ${gender} comes up to you smelling of ${smell}.`
    }

    this.begin = () => {
      this.firstCharacterHint()
    }

    this.firstCharacterHint = (characterTraitDecider) => {
      switch(characterTraitDecider) {
      case 'Napoleon':
        return this.genderAndSmell("man", "leather")
      break
      default:
        return this.genderAndSmell("man", "leather")
      }
    }

    console.log(characterTraitDecider)

    // console.log(this.props.questions.responses.response1);
    return (
      <div id="introbox">
        {introCounter === 3 ?
          <p onClick={this.handleClick}>{this.firstCharacterHint()}</p>
        :
        <p onClick={this.handleClick}>{this.state.introBeat}</p>}
      </div>
    )
  }
}

export default IntroBox
