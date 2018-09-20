import React, { Component } from 'react'

export default class QuestionBox extends Component {
  constructor(props) {
  super(props)

  }

  render() {

    const questions = [
      {napoleon:
        {responses:{
          response1: "You think you know me?",
          response2: "Oui, and being in a charge, what are you looking at, stupide?",
          response3: "I’ve gotten into it once or twice; what else do you think about me?",
          response4a: "Ehh, sort of, born in Corsica as a French Province. So what?",
          response4b: "And I am the greatest commander there was! Now you tell me how great I am.",
          response5: "I was a colossus, now say my name!",
          disagree: "Non"
        },
        quizChoices:{
          a: "Napoleon Bonaparte",
          b: "Duke of Wellington",
          c: "Philippe Pétain"
        }
      }
      }
    ]



    // console.log(questions[0].napoleon.responses.response1);
    return (
      <div className="questionbox">
        <h3>{questions[0].napoleon.responses.response1}</h3>

      </div>
    )
  }
}
