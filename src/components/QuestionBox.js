import React, { Component } from 'react'

export default class QuestionBox extends Component {
  constructor(props) {
  super(props)

  }

  render() {

    // console.log(this.props.questions.responses.response1);
    return (
      <div className="questionbox">
        <h3>{this.props.questions.responses.response1}</h3>

      </div>
    )
  }
}
