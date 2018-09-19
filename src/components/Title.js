import React, { Component } from 'react'

let introCounter = 0

class Title extends Component {
  constructor(props){
  super(props)

    this.state = {
      introBeat: this.props.intro[introCounter]
    }
  }


  render(){

  this.changeState = () => {
    introCounter += 1
    this.setState({introBeat: this.props.intro[introCounter]})
  }

  // console.log(this.props);
  this.handleClick = (event) => {
    event.preventDefault()
    this.changeState()
    console.log(introCounter)
  }


  return (
    <div>
      <h1>THE WAYBACK GANG</h1>
      <div id="intro" onClick={this.handleClick}>{this.state.introBeat}</div>
    </div>
    )
  }
}


export default Title
