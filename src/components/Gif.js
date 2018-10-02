import React from 'react'
import GangGif from '../images/gang_gif.gif'

const Gif = (props) => {
  return (
    <div>
      {/* <img src={GangGif} /> */}
      <img id="gif" src={GangGif} alt='gif'/>
    </div>
  )
}


export default Gif
