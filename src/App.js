import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import QuestionBox from './components/QuestionBox'
import Gif from './components/Gif'
import { connect } from 'react-redux'
// import store from './store'
import IntroBox from './components/IntroBox'
// import questions from './questions'

class App extends Component {
  render() {

    const intro = [
      'It’s late, you’re tired, and almost home. Thankfully you know a shortcut. A dark alley; ill-lit and unfrequented by most excepting rats. Perfect!',
      'There’s a gang of people loitering in the stygian space and they look oddly familiar, like you’ve seen them somewhere, somehow they’re important.',
      'Almost like people out of a history textbook. It looks like the alley is the place to be tonight... but probably not the place for you. They leer at you menacingly, definitely not a group to provoke.',
    ]



    // const mapStateToProps = (state) => ({
    //    readyToPlay:  state.readyToPlay
    //    // any props you need else
    // })
    // store.subscribe(currentState)
    // let currentState = store.getState()
    // let ready = currentState.readyToPlay
    // console.log(ready);

    return (
      <div className="App" style={{background: './images/cobblestones.jpg'}}>
        <Title />
        <IntroBox intro={intro}/>
        {this.props.readyToPlay ? <QuestionBox /> : null}
        <Gif />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    readyToPlay:  state.readyToPlay
  }
   // any props you need else
}

export default connect(mapStateToProps)(App);
