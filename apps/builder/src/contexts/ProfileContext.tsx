import React, { useContext, createContext, useReducer, Dispatch } from 'react'
import { initialProfileState } from './ProfileStateReducer'
import { DeckStateTypes } from './DeckTypes'

type ProfileStateTypes = {
  decks: DeckStateTypes[] | undefined[],
  loading: boolean
}

type ProfileActionTypes = {
  type: string,
  payload: any
}

type DeckReducerType = (
  state: ProfileStateTypes,
  action: ProfileActionTypes
) => ProfileStateTypes

type ProfileContextProviderType = {
  reducer: DeckReducerType
  initialState: ProfileStateTypes
  children: React.ReactNode
}

type ProfileReducerTypes = [ProfileStateTypes, Dispatch<ProfileActionTypes>]

const ProfileContext = createContext<ProfileReducerTypes>([
  initialProfileState,
  () => null
])

const ProfileContextProvider = ({
  reducer,
  initialState,
  children
}: ProfileContextProviderType) => {
  return (
    <ProfileContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ProfileContext.Provider>
  )
}

export { ProfileStateTypes, ProfileActionTypes }

export function useProfileContext () {
  return useContext(ProfileContext)
}

export default ProfileContextProvider
