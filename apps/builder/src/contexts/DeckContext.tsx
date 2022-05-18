import React, { useContext, createContext, useReducer } from 'react'

type DefaultStateTypes = object

type DeckReducerType = (state: object, action: string) => object

type DeckContextProviderType = {
  reducer: DeckReducerType,
  initialState: object,
  children: React.ReactNode
}

const defaultState = {}
const deckContext = createContext<DefaultStateTypes>(defaultState)

const DeckContextProvider = ({ reducer, initialState, children }: DeckContextProviderType) => {
  return (
    <deckContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </deckContext.Provider>
  )
}

export function useDeckContext () {
  return useContext(deckContext)
}

export default DeckContextProvider
