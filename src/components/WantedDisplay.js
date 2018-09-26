import React, { Component } from 'react'
import Wanted from '../images/wanted-poster-modern-9.jpg'
const URL = "http://localhost:3000/api/v1/fetches"
let image = ""
let checkBoolean = false

// let personToFetch = "Napoleon"


export default class WantedDisplay extends Component {
  constructor(props) {
  super(props)

  this.state = {
    dataLoaded: false,
    wantedInfo: ""
  }

  }

  componentDidMount() {
  fetch(URL)
  .then(resp => resp.json())
  .then(json => console.log(json))
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

  //
  // filterName = (data) => {
  //   let stringified = (data.query.pages[69880].revisions[0]['*']).toString ()
  //   let filtered = stringified.filter(word => word === 'title="Napoleon Bonaparte (disambiguation)">Napoleon Bonaparte')
  //   console.log(filtered);
  // }

  render() {
    // console.log(this.props.questions.responses.response1);
    return (
      <div id="wanted">
        <p id="ohno" >Sacre bleu! Nobody should know I have returned!</p>
        <br/>
        {/* <p id="characterInfo" >hi</p> */}
        { this.state.dataLoaded ? <img id="portrait" src={image} alt='portrait' /> : null}
        <img id="wantedPoster" src={Wanted} alt='Wanted'/>
        { checkBoolean ? <div id="wantedInfo" src={image} alt='portrait' ></div>: null}
      </div>
    )
  }
}
