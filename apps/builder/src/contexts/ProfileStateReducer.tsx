import { ProfileStateTypes, ProfileActionTypes } from './ProfileContext'

export const initialProfileState = {
  loading: true,
  decks: []
}

export const profileStateActions = {
  SET_DECKS: 'SET_DECKS'
}

const profileReducer = (state: ProfileStateTypes, action: ProfileActionTypes) => {
  switch(action.type) {
    case profileStateActions.SET_DECKS:
      return {
        ...state,
        decks: action.payload.decks,
        loading: false
      }
  }
  return state
}

export default profileReducer
