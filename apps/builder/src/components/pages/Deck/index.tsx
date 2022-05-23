import DeckContainer from './DeckContainer'
import {
  DeckContextProvider,
  initialDeckState
} from '../../../contexts/DeckContext'
import deckReducer from '../../../contexts/DeckStateReducer'
import CardPreviewProvider from '../../../contexts/CardPreviewContext'

const Deck = () => {
  return (
    <DeckContextProvider reducer={deckReducer} initialState={initialDeckState}>
      <CardPreviewProvider>
        <DeckContainer />
      </CardPreviewProvider>
    </DeckContextProvider>
  )
}

export default Deck
