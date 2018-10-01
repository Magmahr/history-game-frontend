import React, { Component } from 'react'
import Wanted from '../images/wanted-poster-modern-n.jpg'
import {connect} from 'react-redux'
import { ADD_WANTED_POSTER } from '../types'
import { addWantedPoster } from '../actions.js'
import { ADD_BADGE } from '../types'
import { addBadge } from '../actions.js'
import Badge from '../images/badge2.png'

let visibility = {
  visibility: "visible"
}
let sacreBleu = {
  visibility: "visible"
}
const qbox = document.getElementsByClassName("questionbox")
const URL = "http://localhost:3000/api/v1/fetches"
let image = ""
let checkBoolean = false

// let personToFetch = "Napoleon"


class WantedDisplay extends Component {
  constructor(props) {
  super(props)

  this.state = {
    dataLoaded: false,
    wantedInfo: ""
  }

  }

  componentDidMount() {
  mapDispatchToProps()

  // fetch(URL)
  // .then(resp => resp.json())
  // .then(json => console.log(json))
  // .then(json => this.imageFinder(json)) //extract JSON from the http response
  // do something with myJson
  // .then(json => console.log(json))
  // .then(json => this.isDataLoaded(json))
  }

  // setWantedInfo = (json) => {
  //   this.setState({ wantedInfo: json[1] })
  // }

  imageFinder = (json) => {
    let url = json[0][2]
    image = url.toString()
    // console.log(image);
  }

  isDataLoaded = (json) => {
    let checkArray = []
    checkArray.push(json)
    if (checkArray.length > 0) {
      this.setState({ dataLoaded: true })
    }
    // if (this.state.wantedInfo !== "") {
    //   checkBoolean = true
    // }
  }

  clickCollect = (event) => {
    visibility = {
      visibility: "hidden",
    }
    this.props.addBadge()
  }


  badgeInfo = () => {
    return "Napoleon was exiled to an island and escaped, but was exiled once yet again to a different island later in his reign. He escaped Elba to rule again briefly before disaster at Waterloo. He never did escape Saint Helena."
  }

  ohno = (event) => {
    sacreBleu = {
      visibility: "hidden"
    }
  }

  timedOhNo = () => {
    setTimeout(()=> this.ohno(), 2000)
  }


  render() {
    // console.log(this.props.questions.responses.response1);
    return (
      <div id="wanted">
        <p id="ohno" style={sacreBleu} >Sacre bleu! Nobody should know I have returned!</p>
        <br/>
        { this.props.badges.length > 1 ?
          <div id="badgeBox">
            <h3>Island Hopper Badge</h3>
            <img id="badge" src={Badge} alt="badge"/>
            <p>{this.badgeInfo()}</p>
          </div>
          :
           null }
             <button id="collectCoin" onClick={this.clickCollect} style={visibility}>Collect Your Bounty!</button>
            { this.state.dataLoaded ? <img id="portrait" src={image} alt='portrait' /> : null}
            <img id="wantedPoster" src={Wanted} alt='Wanted' style={visibility}/>
            { checkBoolean ? <div id="wantedInfo" src={image} alt='portrait' ></div>: null}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBadge: () => dispatch(addBadge())
  }
}

function mapStateToProps (state) {
  return {
      badges: state.badges,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WantedDisplay)
