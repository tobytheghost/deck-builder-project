import DeckContainer from './DeckContainer'
import {
  DeckContextProvider,
  initialDeckState
} from '../../../contexts/DeckContext'
import deckReducer from '../../../contexts/DeckStateReducer'

const Deck = () => {
  return (
    <DeckContextProvider reducer={deckReducer} initialState={initialDeckState}>
      <DeckContainer />
    </DeckContextProvider>
  )
}

export default Deck
