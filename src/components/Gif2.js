import React, {Component} from 'react'
import RunawayGif from '../images/runawayhat.gif'


class Gif2 extends Component {
  constructor(props) {
  super(props)

  this.state = { visibility: "here" }

  }

  componentDidMount() {
    this.changeVisibility()
  }

  resetState = () => {
    this.setState({ visibility: "nothere" })
    console.log(this.state.visibility);
  }

  changeVisibility = () => {
    setTimeout(this.resetState, 2000 )

  }

  render() {

  return (
    <div>
      {this.state.visibility === "here"
        ?

          <img id='gif2' src={RunawayGif} alt='gif'/>

        : null
      }
    </div>
  )
      }


}

export default Gif2
