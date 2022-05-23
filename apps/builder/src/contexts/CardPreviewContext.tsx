import { useContext, useState, createContext, ReactNode, useEffect } from 'react'
import safeParseJson from '../helpers/safeParseJson'
import { CardItemTypes, ScryfallDataTypes } from './DeckTypes'

interface CardPreviewStateTypes {
  card: CardItemTypes,
  scryfallData: ScryfallDataTypes | null
  handleSetCard: (card: CardItemTypes) => void
}

const defaultCardPreviewState: CardPreviewStateTypes = {
  card: {
    id: '',
    name: '',
    cmc: 0,
    quantity: 0,
    board: '',
    type: '',
    layout: '',
    mana_cost: '',
    image: ''
  },
  scryfallData: null,
  handleSetCard: (card: CardItemTypes) => null
}

const getCard = async (card: CardItemTypes) => {
  const cache = localStorage.getItem('scryfall-card-details')
  const cacheData = cache && safeParseJson(cache)
  const cardData = cacheData && cacheData[card.id]
  if (cardData) return cardData

  const url = `https://api.scryfall.com/cards/`
  try {
    const response = await fetch(`${url}${card.id}`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()

    localStorage.setItem(
      'scryfall-card-details',
      JSON.stringify({ ...cacheData, [data.id]: data })
    )

    return data
  } catch (error) {
    return null
  }
}

const CardPreviewContext = createContext(defaultCardPreviewState)

const CardPreviewProvider = ({ children }: { children: ReactNode }) => {
  const [card, setCard] = useState(defaultCardPreviewState.card)
  const [scryfallData, setScryfallData] = useState<ScryfallDataTypes | null>(null)

  const handleSetCard = (card: CardItemTypes) => {
    setCard(card)
  }

  useEffect(() => {
    const getData = async (card: CardItemTypes) => {
      const cardData = await getCard(card)
      setScryfallData(cardData)
    }
    getData(card)
  }, [card])

  return (
    <CardPreviewContext.Provider value={{ card, scryfallData, handleSetCard }}>
      {children}
    </CardPreviewContext.Provider>
  )
}

export function useCardPreview () {
  return useContext(CardPreviewContext)
}

export default CardPreviewProvider
