import { CardItemTypes } from '../../../contexts/DeckTypes'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import safeParseJson from '../../../helpers/safeParseJson'

export const useDecks = (lookupId: string | null) => {
  const [decks, setDecks] = useState<{ id: string; list: CardItemTypes[]; }[]>([])
  const [isDecksError, setIsDecksError] = useState(false)
  const [isDecksLoading, setIsDecksLoading] = useState(true)

  useEffect(() => {
    if (!lookupId) return
    const decksQuery = db.collection('decks').where('user_id', '==', lookupId)
    const unsubscribeDecks = decksQuery.onSnapshot(
      querySnapshot => {
        const docs = querySnapshot.docs
        const deckData = docs.map(doc => {
          const data = doc.data()
          return {
            ...data,
            id: doc.id,
            list: safeParseJson(data['list'], true)
          }
        })
        setDecks(deckData)
        setIsDecksLoading(false)
      },
      err => {
        console.error(err)
        setIsDecksError(true)
      }
    )
    return () => unsubscribeDecks()
  }, [lookupId])

  return { decks, isDecksError, isDecksLoading }
}
