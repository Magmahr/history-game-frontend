import React, { Component } from 'react'
import { addWantedPoster } from '../actions.js'
import { ADD_WANTED_POSTER} from  '../types'
import { changeGotchaGif } from '../actions.js'
import { CHANGE_GOTCHA_GIF } from  '../types'
import { connect } from 'react-redux'


let respCount = 0
let reac1Count = 1
let reac2Count = 1
let finalQs = []
let color1 = "yellow"
let color2 = "yellow"
let visibility = {
  visibility: "visible"
}
let borderStyle = {
  // backgroundColor: ''
  border: ''
}
let eventObjId

const questions = [
  {napoleon:
    {responses:{
      1: "Oui, and being in a charge, what are you looking at, stupide?",
      2: "I’ve gotten into it once or twice; what else do you think about me?",
      3: "Ehh, sort of, born in Corsica as a French Province. So what?",
      4: "And I am the greatest commander there was! Tell me how great I am.",
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
        1, 1, (1, 2), 1, 2
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

class QuestionBox extends Component {
  constructor(props) {
  super(props)
    this.state = {
      currentQ: "You think you know me?",
      answer1: questions[0].napoleon.reactions[reac1Count],
      answer2: questions[0].napoleon.reactions['a' + reac2Count],
      truthToggle: false
    }
  }


    handleFinalAnswerClick = (event) => {
      event.preventDefault()
      if (event.target.id === "Napoleon Bonaparte"){
        this.setState({ truthToggle: true })
        color1 = 'green'
        setTimeout(this.props.changeGotchaGif(), 3000)
        setTimeout(this.props.addWantedPoster, 3000)
        visibility = { visibility: "hidden"}

      } else
      this.setState({ currentQ: "HA HA! YOU FOOL! I AM OFF TO RECONQUER FRANCE!"})
      finalQs = []
    }

    hover = (event) => {
      borderStyle = {
        // backgroundColor: 'blue'
        border: '20px solid pink',
      }
      console.log(borderStyle);
    }


    qMapper = () => {
    finalQs = questions[0].napoleon.answerChoices.map(choice => {
      return (<div className='questionCenter'><button className={color1} role='button' onClick={this.handleFinalAnswerClick} key={choice} id={choice}>{choice}</button></div>)
    })
    }

    disable = (event) => {
      console.log(event.target);
      if (respCount === 4) {
          console.log('hi');
      } else
      document.getElementById(event.target.id).disabled = true;

    }


    handleClick = (event) => {
      event.preventDefault()
      eventObjId = event.target.id
      this.disable(event)
      this.answerProcessor(event)
      // console.log(event.target.id)
      // setTimeout(() => this.enable(), 2000)
    }

    enable = () => {
      // document.getElementById(eventObjId).disabled = false;
      if (respCount < 5) {
        document.getElementById("one").disabled = false;
        document.getElementById("two").disabled = false;
      }
    }

    right = (event) => {
      if (event.target.id === 'one') {
        color1 = "green"
      }
      else if (event.target.id === 'two') {
        color2 = "green"
      }
      setTimeout(() => this.interactionProgressForward(), 2000)
    }

    wrong = (event) => {
      // console.log(event.target.id);
      if (event.target.id === 'one') {
        color1 = "red"}
      else if (event.target.id === 'two') {
        color2 = "red"
      }
    }

    answerProcessor = (event) => {
      if (respCount === 0) {
        if (event.target.id === 'two'){
          this.setState({ currentQ: "Non!"})
          this.wrong(event)
        }else if (event.target.id === 'one'){
          // console.log(event.target.id);
          this.setState({ truthToggle: true })
          this.right(event)
        }
        // setTimeout(() => this.enable(), 2000)
      } else
       if (respCount === 1) {
          if (event.target.id === 'two'){
            this.setState({ currentQ: "Faux!"})
            this.wrong(event)
          }else if (event.target.id === 'one'){
            // console.log(event.target.id);
            this.setState({ truthToggle: true })
            this.right(event)
          }
        // setTimeout(() => this.enable(), 2000)
      } else
       if (respCount === 2) {
          if (event.target.id === 'one'){
            this.setState({ truthToggle: true })
            this.right(event)
          }else if (event.target.id === 'two') {
            this.setState({ truthToggle: true })
            this.right(event)
            setTimeout(() => this.interactionProgressForward(), 2000)
          }
          // setTimeout(() => this.enable(), 2000)
        } else
         if (respCount === 3) {
            if (event.target.id === 'one'){
              this.setState({ truthToggle: true })
              console.log(event.target.id);
              this.right(event)
            }else if (event.target.id === 'two') {
              this.setState({ currentQ: "Pas vrai!"})
              this.wrong(event)
            }
            // setTimeout(() => this.enable(), 2000)
          } else
         if (respCount === 4) {
            if (event.target.id === 'one'){
              this.setState({ currentQ: "Non non non, Ne pourrait pas être plus faux!"})
              this.wrong(event)
              // setTimeout(() => this.enable(), 2000)
            }else if (event.target.id === 'two'){
              this.setState({ truthToggle: true })
              this.right(event)
              setTimeout(this.prepFinalQYellow, 2000)
              this.qMapper()
            }
          }
          setTimeout(() => this.enable(), 2000)
    }

      prepFinalQYellow = () => {
        this.setState({ truthToggle: false })
        color1  = "yellow"
        color2  = "yellow"

      }

     interactionProgressForward = () => {
      color1  = "yellow"
      color2  = "yellow"
      respCount += 1
      reac1Count += 1
      reac2Count += 1
      this.setState({ truthToggle: false})

      this.changeQuestionState()
    }

    // styleChange = () => {
    //   if (phrase === "nogo") {
    //     return "red"
    //   } else if (phrase === "go") {
    //     return "green"
    //   } else {
    //     return "yellow"
    //   }
    // }


    changeQuestionState = () => {
    this.setState({ currentQ: questions[0].napoleon.responses[respCount]})
    this.setState({ answer1: questions[0].napoleon.reactions[reac1Count]})
    this.setState({ answer2: questions[0].napoleon.reactions['a' + reac2Count]})
    }

  render() {
// console.log(this.state.finalQ3);
    return (
      <div className="questionbox" style={visibility} >
        { respCount === 5
          ?

            <div className='questionCenter'>
              <h3>{this.state.currentQ}</h3>
              {finalQs}
            </div>
          :
          <div onClick={this.responseClick} className='questionCenter'>
            <h3>{this.state.currentQ}</h3>
            <div>
              <button  onClick={this.handleClick} id="one"  className={color1} style={borderStyle}>{this.state.answer1}</button>
            </div>

            <div>
              <button className={color2} onClick={this.handleClick} id="two">{this.state.answer2}</button>
            </div>

          </div>
        }
      </div>
    )
  }
}

// data-value={this.styleChange}

function mapDispatchToProps(dispatch) {
  return {
    addWantedPoster: () => dispatch(addWantedPoster()),
    changeGotchaGif: () => dispatch(changeGotchaGif())
  }
}

function mapStateToProps (state) {
  return {
      wanted: state.wantedPosters,
      gotchaGif: state.gotchaGif
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBox)
