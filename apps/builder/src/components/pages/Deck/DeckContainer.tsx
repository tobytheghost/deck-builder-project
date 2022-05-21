import React from 'react'
import { Navigate } from 'react-router-dom'
import DeckView from './DeckView'
import { useDeck } from './useDeck'

const DeckContainer = () => {
  const { deck, isError } = useDeck()
  if (isError) return <Navigate to='/oops' />

  return <DeckView {...deck} />
}

export default DeckContainer
