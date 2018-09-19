import { ADD_BADGE } from './types'
import { ADD_REVEALED_CHARACTERS } from './types'
import { ADD_CONTACTED_CHARACTERS } from './types'
import { ADD_WANTED_POSTER } from './types'
import { CHANGE_CURRENT_CHARACTER } from './types'

export addBadge = (badge) => {
  return {
    type: ADD_BADGE,
    payload: badge
  }
}

export addRevealedCharacters = (character) => {
  return {
    type: ADD_REVEALED_CHARACTERS,
    payload: character
  }
}

export addContactedCharacters = (character) => {
  return {
    type: ADD_CONTACTED_CHARACTERS,
    payload: character
  }
}

export changeCurrentCharacter = (character) => {
  return {
    type: CHANGE_CURRENT_CHARACTER,
    payload: character
  }
}

export addWantedPoster = (character) => {
  return {
    type: ADD_WANTED_POSTER,
    payload: character
  }
}
