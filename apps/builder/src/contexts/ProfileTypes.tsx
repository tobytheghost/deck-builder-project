import { Dispatch } from 'react'
import { Timestamp } from '../firebase'
import { DeckStateTypes } from './DeckTypes'

export interface UserStateType {
  display_name: string
  user_id: string
  last_active?: Timestamp
  user_since?: Timestamp
}

export interface ProfileStateTypes {
  loading: boolean
  decks: DeckStateTypes[] | undefined[]
  user: UserStateType
}

export interface ProfileActionTypes {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

export type ProfileReducerType = (
  state: ProfileStateTypes,
  action: ProfileActionTypes
) => ProfileStateTypes

export interface ProfileContextProviderType {
  reducer: ProfileReducerType
  initialState: ProfileStateTypes
  children: React.ReactNode
}

export type ProfileReducerTypes = [
  ProfileStateTypes,
  Dispatch<ProfileActionTypes>
]
