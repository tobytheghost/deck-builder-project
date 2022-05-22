import React, { useContext, createContext, useReducer } from 'react'
import { initialProfileState } from './ProfileStateReducer'
import { ProfileContextProviderType, ProfileReducerTypes } from './ProfileTypes'

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

export function useProfileContext () {
  return useContext(ProfileContext)
}

export default ProfileContextProvider
