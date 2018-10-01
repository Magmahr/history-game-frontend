import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import { CHANGE_READY_TO_PLAY } from  '../types'
import { changeReadyToPlay } from '../actions.js'
import { changeGenderAndSmellNapoleon } from '../actions.js'

let introCounter = 0
let payload

class IntroBox extends Component {
  constructor(props) {
  super(props)

  this.state = {
    introBeat: this.props.intro[introCounter]
  }

  }

  changeState = () => {
    introCounter += 1
    this.setState({introBeat: this.props.intro[introCounter]})
    // console.log(this.state.introBeat);
  }

  // console.log(this.props);
  handleClick = (event) => {
    event.preventDefault()
    this.changeState()
    // console.log(introCounter)
    if (introCounter === 4) {
      this.begin()
    }
  }


  genderAndSmell = () => {
    this.props.changeGenderAndSmellNapoleon()
    return `You attempt to pass politely by but a ${this.props.gender} comes up to you smelling of ${'leather'}.`
  }

  begin = () => {
    // store.dispatch({
    //   type: CHANGE_READY_TO_PLAY,
    //   payload: true
    // })
    // console.log("props are", this.props)
    // console.log("-----")
    // console.log(store.getState(""));
  this.props.changeReadyToPlay()

  }


  render() {

    // console.log(this.props)
    return (
      <div id="introbox" onClick={this.handleClick}>
        {introCounter === 3 ?
          <p onClick={this.handleClick} id="introtext">{this.genderAndSmell()}</p>
        :
        <div>
        <p id="introtext">{this.state.introBeat}</p>
        <button ></button>
      </div>}
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

function mapStateToProps (state) {
  return {
      gender: state.gender,
      smell: state.smell
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroBox)
