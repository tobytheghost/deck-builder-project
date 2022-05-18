import React, { useContext, createContext, useReducer } from 'react'

type DefaultStateTypes = object
type DeckReducerType = (state: object, action: string) => object
type ProfileContextProviderType = {
  reducer: DeckReducerType,
  initialState: object,
  children: React.ReactNode
}

const defaultState = {}
const ProfileContext = createContext<DefaultStateTypes>(defaultState)

const ProfileContextProvider = ({ reducer, initialState, children }: ProfileContextProviderType) => {
  return (
    <ProfileContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfileContext () {
  return useContext(ProfileContext)
}

export default ProfileContextProvider
