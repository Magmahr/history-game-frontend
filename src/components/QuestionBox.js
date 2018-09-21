import React, { Component } from 'react'

let respCount = 0
let reac1Count = 1
let reac2Count = 1
let finalQs = []
const questions = [
  {napoleon:
    {responses:{
      1: "Oui, and being in a charge, what are you looking at, stupide?",
      2: "I’ve gotten into it once or twice; what else do you think about me?",
      3: "Ehh, sort of, born in Corsica as a French Province. So what?",
      4: "And I am the greatest commander there was! Now you tell me how great I am.",
      5: "I was a colossus, now say my name!",
      disagree: "Non"
    },
    quizChoices:{
      a: "Napoleon Bonaparte",
      b: "Duke of Wellington",
      c: "Philippe Pétain"
    },
    reactions:{
      1: "I get the impression you enjoy being in charge.",
      'a1': "You seem to have a real pious intensity.",

      2: "You seem like the type of guy who would start trouble, international-sized trouble.",
      'a2': "I sense you’re a man of letters, a real philosopher.",

      3: "I think you may be French",
      'a3': "I think you might be a commander of some kind.",

      4: "You act like you owned the place.",
      'a4': "You seem dismissive of France.",

      5: "You won the Battle of Waterloo.",
      'a5': "You won the Battle of Austerlitz.",

      knowYou: "I feel like I know you...",

      reactionDirection: [
        1, 21, (1, 2), 1, 2
      ]
    },
    answerChoices:
    [
      // a: "Napoleon Bonaparte",
      // b: "Duke of Wellington",
      // c: "Philippe Pétain"
      "Napoleon Bonaparte",
      "Duke of Wellington",
      "Philippe Pétain"
    ]
  }
}
]

export default class QuestionBox extends Component {
  constructor(props) {
  super(props)
    this.state = {
      currentQ: "You think you know me?",
      answer1: questions[0].napoleon.reactions[reac1Count],
      answer2: questions[0].napoleon.reactions['a' + reac2Count],
      // finalQ1: questions[0].napoleon.answerChoices['a'],
      // finalQ2: questions[0].napoleon.answerChoices['b'],
      // finalQ3: questions[0].napoleon.answerChoices['c']
    }
  }

    handleFinalAnswerClick = (event) => {
      event.preventDefault()
      if (event.target.id === "Napoleon Bonaparte")
        alert("You win!")
      console.log(event.target);
    }

    qMapper = () => {
    finalQs = questions[0].napoleon.answerChoices.map(choice => {
      return <button onClick={this.handleFinalAnswerClick} key={choice} id={choice}>{choice}</button>
    })
    }


    handleClick = (event) => {
      event.preventDefault()
      this.interactionProgressForward()
      // console.logq(event.target);
    }


     interactionProgressForward = () => {
      respCount += 1
      reac1Count += 1
      reac2Count += 1
      this.changeQuestionState()
    }

    // finalQ = () => {
    //   this.setState({ answer1: questions[0].napoleon.answerChoices[1]})
    //   this.setState({ answer2: questions[0].napoleon.answerChoices[1]})
    // }

    changeQuestionState = () => {
      if (respCount === 5) {
        this.qMapper()
    }
    this.setState({ currentQ: questions[0].napoleon.responses[respCount]})
    this.setState({ answer1: questions[0].napoleon.reactions[reac1Count]})
    this.setState({ answer2: questions[0].napoleon.reactions['a' + reac2Count]})
    }

  render() {
// console.log(this.state.finalQ3);
    return (
      <div className="questionbox" >
        { respCount === 5
          ?
            // <div>
            //   <h3>{this.state.currentQ}</h3>
            //   <button onClick={this.handleFinalAnswerClick} id="1">{this.state.finalQ1}</button>
            //   <button onClick={this.handleFinalAnswerClick} id="2">{this.state.finalQ2}</button>
            //   <button onClick={this.handleFinalAnswerClick} id="3">{this.state.finalQ3}</button>
            // </div>
              <div>{finalQs}</div>
          :
          <div>
          <h3>{this.state.currentQ}</h3>
          <button onClick={this.handleClick} id="1">{this.state.answer1}</button>
          <button onClick={this.handleClick} id="2">{this.state.answer2}</button>
          </div>
        }
      </div>
    )
  }
}
