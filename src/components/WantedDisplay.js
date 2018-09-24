import React, { Component } from 'react'
import Wanted from '../images/wanted-poster-modern-9.jpg'

// let infobox = require('wiki-infobox');
// var page = 'Warsaw Metro';
// var language = 'en';

// let personToFetch = "Napoleon"
// let URL = `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${personToFetch}&rvsection=0&rvparse`

// infobox(page, language, function(err, data){
//   if (err) {
//     // Oh no! Something goes wrong!
//     return;
//   }
//
//   console.log(data);
//
// })

export default class WantedDisplay extends Component {
  constructor(props) {
  super(props)

  }




  // personToFetch = () => {
  //   return "Napoleon_Bonaparte"
  // }

  // componentDidMount() {
  //   fetch(URL)
  // .then(resp => resp.json())
  // .then(data => this.filterName(data))
  // }
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
        Sacre bleu! Nobody should know I have returned!
        <br/>
        <img id="wantedPoster" src={Wanted} alt='Wanted'/>
      </div>
    )
  }
}
