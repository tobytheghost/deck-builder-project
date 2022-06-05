import { useContext, useState, createContext, ReactNode, useEffect } from 'react'
import safeParseJson from '../helpers/safeParseJson'
import { CardItemTypes, ScryfallDataTypes } from './DeckTypes'

interface CardPreviewStateTypes {
  card: CardItemTypes & ScryfallDataTypes,
  handleSetCard: (card: CardItemTypes) => void,
  previewIsOpen: boolean,
  handleClosePreview: () => void
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
  handleSetCard: (card: CardItemTypes) => null,
  previewIsOpen: false,
  handleClosePreview: () => null

}

const getCard = async (card: CardItemTypes) => {
  console.log(card)
  if(!card || !card.id) return
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
  const [previewIsOpen, setPreviewIsOpen] = useState(false)

  const handleClosePreview = () => {
    setPreviewIsOpen(false)
  }

  const handleSetCard = (card: CardItemTypes) => {
    getData(card)
    setPreviewIsOpen(true)
  }

  const getData = async (card: CardItemTypes) => {
    const cardData = await getCard(card)
    setCard(card => ({...card, ...cardData}))
  }

  useEffect(() => {
    getData(defaultCardPreviewState.card)
    setPreviewIsOpen(false)
  }, [])

  return (
    <CardPreviewContext.Provider value={{ card, handleSetCard, previewIsOpen, handleClosePreview }}>
      {children}
    </CardPreviewContext.Provider>
  )
}

export function useCardPreview () {
  return useContext(CardPreviewContext)
}

export default CardPreviewProvider
