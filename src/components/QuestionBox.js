import React, { Component } from 'react'

export default class QuestionBox extends Component {
  constructor(props) {
  super(props)

  }

  render() {

  let firstHint = this.props.firstHint()
    // console.log(this.props.questions.responses.response1);
    return (
      <div className="questionbox">
        <h3>{this.props.questions.responses.response1}</h3>
        <p>{firstHint}</p>
      </div>
    )
  }
}
