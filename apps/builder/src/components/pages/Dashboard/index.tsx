import DashboardContainer from './DashboardContainer'
import DeckContextProvider from '../../../contexts/DeckContext'
import deckReducer, {
  initialDeckState
} from '../../../contexts/DeckStateReducer'

const Dashboard = () => {
  return (
    <DeckContextProvider reducer={deckReducer} initialState={initialDeckState}>
      <DashboardContainer />
    </DeckContextProvider>
  )
}

export default Dashboard
