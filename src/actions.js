import { ADD_BADGE } from './types'
import { ADD_REVEALED_CHARACTERS } from './types'
import { ADD_CONTACTED_CHARACTERS } from './types'
import { ADD_WANTED_POSTER } from './types'
import { CHANGE_CURRENT_CHARACTER } from './types'
import { CHANGE_READY_TO_PLAY} from './types'
import { CHANGE_GENDER_AND_SMELL_NAPOLEON } from './types'

export function addBadge(badge) {
  return {
    type: ADD_BADGE,
    payload: badge
  }
}

export function addRevealedCharacters (character) {
  return {
    type: ADD_REVEALED_CHARACTERS,
    payload: character
  }
}

export function addContactedCharacters (character) {
  return {
    type: ADD_CONTACTED_CHARACTERS,
    payload: character
  }
}

export function changeCurrentCharacter (character) {
  return {
    type: CHANGE_CURRENT_CHARACTER,
    payload: character
  }
}

export function addWantedPoster (character) {
  return {
    type: ADD_WANTED_POSTER,
    payload: character
  }
}

export function changeReadyToPlay (dispatch) {
  return (dispatch) => {
    // fetch(url)
    // .then(res => res.json())
    // .then(json => dispatch({type: "SOME_TYPE", payload: json}))
    return dispatch({
      type: CHANGE_READY_TO_PLAY,
      payload: true
    })
  }
}

export function changeGenderAndSmellNapoleon (dispatch) {
  return (dispatch) => {
    // fetch(url)
    // .then(res => res.json())
    // .then(json => dispatch({type: "SOME_TYPE", payload: json}))
    return dispatch({
      type: CHANGE_GENDER_AND_SMELL_NAPOLEON,
      payload: {
        gender: "man",
        smell: "leather"
      }
    })
  }
}
