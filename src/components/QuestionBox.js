import React, { Component } from 'react'

let respCount = 0
let reacCount = 0
let currentCharacterPart
let characterPart
const questions = [
  {napoleon:
    {responses:{
      1: "You think you know me?",
      2: "Oui, and being in a charge, what are you looking at, stupide?",
      3: "I’ve gotten into it once or twice; what else do you think about me?",
      4: "Ehh, sort of, born in Corsica as a French Province. So what?",
      5: "And I am the greatest commander there was! Now you tell me how great I am.",
      6: "I was a colossus, now say my name!",
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

export default class QuestionBox extends Component {
  constructor(props) {
  super(props)
    this.state = {
      currentQ: ""
    }
  }
 
    handleClick = (event) => {
      event.preventDefault()
      this.interactionProgressForward()
    }

     makeCurrentCharacterPart = () => {
      currentCharacterPart = (questions[0].napoleon.responses[respCount])
      // console.log(currentCharacterPart)
      return `${currentCharacterPart}`
    }

     interactionProgressForward = () => {
      respCount += 1
      reacCount += 1
      this.makeCurrentCharacterPart()
    }

  render() {

    return (
      <div className="questionbox" onClick={this.handleClick}>
        <h3>hi {this.hello}</h3>

      </div>
    )
  }
}
