import React, { Component } from 'react'

export default class QuestionBox extends Component {
  constructor(props) {
  super(props)
    this.state = {
      currentQ: ""
    }
  }

  render() {

    const questions = [
      {napoleon:
        {responses:{
          resp1: "You think you know me?",
          resp2: "Oui, and being in a charge, what are you looking at, stupide?",
          resp3: "I’ve gotten into it once or twice; what else do you think about me?",
          resp4a: "Ehh, sort of, born in Corsica as a French Province. So what?",
          resp4b: "And I am the greatest commander there was! Now you tell me how great I am.",
          resp5: "I was a colossus, now say my name!",
          disagree: "Non"
          },
        quizChoices:{
          a: "Napoleon Bonaparte",
          b: "Duke of Wellington",
          c: "Philippe Pétain"
          },
        reactions:{
          reac1a: "I get the impression you enjoy being in charge.",
            reac1b: "You seem to have a real pious intensity.",

          reac2a: "You seem like the type of guy who would start trouble, international-sized trouble.",
            reac2b: "I sense you’re a man of letters, a real philosopher.",

          reac3a: "I think you may be French",
            reac3b: "I think you might be a commander of some kind.",

          reac3a: "You act like you owned the place.",
            reac3b: "You seem dismissive of France.",

          reac4a: "You won the Battle of Waterloo.",
            reac4a: "You won the Battle of Austerlitz.",

          knowYou: "I feel like I know you...",
      },
        answerChoices:{
          a: "Napoleon Bonaparte",
          b: "Duke of Wellington",
          c: "Philippe Pétain"
          }
    }
      }
    ]

    let respCount = 1
    let reacCount = 1
    
    this.interactionProgressForward = () => {
      respCount += 1
      reacCount += 1
    }

    this.characterPart = () => {
      return `${questions[0].napoleon.responses.resp1}`
    }





    // console.log(questions[0].napoleon.responses.response1);
    return (
      <div className="questionbox">
        <h3>{this.characterPart()}</h3>

      </div>
    )
  }
}
