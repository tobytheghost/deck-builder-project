import { Timestamp } from '../firebase'

export interface DeckContextProviderType {
  reducer: DeckReducerType
  initialState: DeckStateTypes
  children: React.ReactNode
}

export interface DeckStateTypes {
  id: string
  image: string
  deck_name: string
  list: CardItemTypes[] | never[]
  user_id: string
  format: string
  tag: string
  timestamp?: Timestamp
}

export interface DeckFirebaseTypes extends Omit<DeckStateTypes, 'list'> {
  list: string
}

export interface CardItemTypes {
  name: string
  cmc: number
  quantity: number
  board: string
  type: string
  layout: string
  mana_cost: string
  image: string
}

export interface DeckReducerActionType {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

export type DeckReducerType = (
  state: DeckStateTypes,
  action: DeckReducerActionType
) => DeckStateTypes
