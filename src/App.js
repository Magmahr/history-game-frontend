import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import QuestionBox from './components/QuestionBox'
import Gif from './components/Gif'
import { connect } from 'react-redux'
import store from './store'
// import questions from './questions'



class App extends Component {
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

    const intro = [
      'It’s late, you’re tired, and almost home. Thankfully you know a shortcut. A dark alley; ill-lit and unfrequented by most excepting rats. Perfect!',
      'There’s a gang of people loitering in the stygian space and they look oddly familiar, like you’ve seen them somewhere, somehow they’re important.',
      'Almost like people out of a history textbook. It looks like the alley is the place to be tonight... but probably not the place for you. They leer at you menacingly, definitely not a group to provoke.',
    ]



    let firstCharacterHint = "A {} smelling of {}"

    console.log(store.getState());
    // console.log();
    return (
      <div className="App">
        <Title intro={intro}/>
        <Gif />
        <QuestionBox questions={questions[0].napoleon}/>
      </div>
    );
  }
}

export default App;
