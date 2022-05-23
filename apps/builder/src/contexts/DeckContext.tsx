import { useContext, createContext, useReducer, Dispatch } from 'react'
import {
  DeckContextProviderType,
  DeckReducerActionType,
  DeckStateTypes
} from './DeckTypes'

type DeckContextTypes = [DeckStateTypes, Dispatch<DeckReducerActionType>]

export const initialDeckState: DeckStateTypes = {
  id: '',
  image: '',
  deck_name: '',
  list: [],
  user_id: '',
  tag: '',
  format: ''
}

const deckContext = createContext<DeckContextTypes>([
  initialDeckState,
  () => null
])

export const DeckContextProvider = ({
  reducer,
  initialState,
  children
}: DeckContextProviderType) => {
  return (
    <deckContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </deckContext.Provider>
  )
}

export default function useDeckContext () {
  return useContext(deckContext)
}
