import React from 'react'
import { Navigate } from 'react-router-dom'
import DeckView from './DeckView'
import { useDeck } from './useDeck'
import { useUser } from '../../../hooks/useUser'
import { useDeckRating } from '../../../hooks/useDeckRating'

const DeckContainer = () => {
  const { deck, isDeckError, isDeckLoading } = useDeck()
  const { user, isUserError, isUserLoading } = useUser(deck && deck.user_id)
  const deckRating = useDeckRating(deck && deck.id)

  if (isDeckError || isUserError) return <Navigate to='/oops' />
  if (isDeckLoading || isUserLoading) return null

  return <DeckView {...deck} {...user} {...deckRating}/>
}

export default DeckContainer
