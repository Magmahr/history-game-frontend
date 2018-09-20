import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import { CHANGE_READY_TO_PLAY } from  '../types'
import { changeReadyToPlay } from '../actions.js'
import { changeGenderAndSmellNapoleon } from '../actions.js'

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
      // console.log(this.state.introBeat);
    }

    // console.log(this.props);
    this.handleClick = (event) => {
      event.preventDefault()
      this.changeState()
      // console.log(introCounter)
      if (introCounter === 4) {
        this.begin()
      }
    }

    let npayload = this.props.changeGenderAndSmellNapoleon().payload
    console.log(npayload)


    this.genderAndSmell = (payload) => {
      return `You attempt to pass politely by but a ${payload.gender} comes up to you smelling of ${payload.smell}.`
    }

    this.begin = () => {
      // store.dispatch({
      //   type: CHANGE_READY_TO_PLAY,
      //   payload: true
      // })
      // console.log("props are", this.props)
      // console.log("-----")
      // console.log(store.getState(""));
      this.props.changeReadyToPlay()
    }


    // console.log(this.props.questions.responses.response1);
    return (
      <div id="introbox">
        {introCounter === 3 ?
          <p onClick={this.handleClick}>{this.genderAndSmell(npayload)}</p>
        :
        <p onClick={this.handleClick}>{this.state.introBeat}</p>}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeReadyToPlay: () => dispatch(changeReadyToPlay()),
    changeGenderAndSmellNapoleon: () => dispatch(changeGenderAndSmellNapoleon()),
  }
}

export default connect(null, mapDispatchToProps)(IntroBox)
