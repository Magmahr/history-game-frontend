import React, { Component } from 'react'

export default class WantedDisplay extends Component {
  constructor(props) {
  super(props)

  }

  render() {
    // console.log(this.props.questions.responses.response1);
    return (
      <div id="wanted">
        Sacre bleu! Nobody should know I have returned!
        {/* <img src='../../images/wanted_poster.png'/> */}
      </div>
    )
  }
}
