import React from 'react'
import { Link } from 'react-router-dom'
import { DeckStateTypes } from '../../../contexts/DeckTypes'

const DeckMiniPreview = (props: DeckStateTypes) => {
  const { image, deck_name: deckName, id } = props
  return (
    <Link to={`/d/${id}`}>
      {deckName}
      <img src={image} alt={deckName} />
    </Link>
  )
}

export default DeckMiniPreview
