import { ADD_BADGE } from './types'
import { ADD_REVEALED_CHARACTERS } from './types'
import { ADD_CONTACTED_CHARACTERS } from './types'
import { ADD_WANTED_POSTER } from './types'
import { CHANGE_CURRENT_CHARACTER } from './types'
import { CHANGE_READY_TO_PLAY } from './types'

const initialState = {
  badges: [],
  revealedCharacters: [],
  contactedCharacters: [],
  wantedPosters: [],
  currentCharacter: "Napoleon",
  readyToPlay: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BADGE:
      return { ...state, badges: action.payload}
    case ADD_REVEALED_CHARACTERS:
      return { ...state, revealedCharacters: action.payload}
    case ADD_CONTACTED_CHARACTERS:
      return {...state, contactedCharacters: action.payload}
    case ADD_WANTED_POSTER:
      return { ...state, wantedPosters: action.payload}
    case CHANGE_CURRENT_CHARACTER:
      return { ...state, wantedPosters: action.payload}
    case CHANGE_READY_TO_PLAY:
      return { ...state, readyToPlay: action.payload}
    default:
      return state
  }
}
