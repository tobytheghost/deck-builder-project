import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../../../builder/src/firebase'
import useDeckContext from '../../../contexts/DeckContext'
import { deckStateActions } from '../../../contexts/DeckStateReducer'
import { formatDeckFirebaseToState } from '../../../../src/helpers/formatFirebase'
import { DeckFirebaseTypes } from '../../../../src/contexts/DeckTypes'

export const useDeck = () => {
  const [isDeckLoading, setIsDeckLoading] = useState(true)
  const [isDeckError, setIsError] = useState(false)
  const { currentUser } = useAuth()
  const uid = currentUser && currentUser.uid
  const [deck, dispatch] = useDeckContext()
  const { deckId } = useParams()

  useEffect(() => {
    if(!deckId) return
    const getDeckById = async (deckId: string) => {
      try {
        const docRef = db.collection('decks').doc(deckId)
        const doc = await docRef.get()
        if (!doc || !doc.exists) return setIsError(true)
        return docRef.onSnapshot(snapshot => {
          const id = snapshot.id
          const loadedDeck = snapshot.data() as DeckFirebaseTypes
          dispatch({
            type: deckStateActions.SET_DECK,
            payload: formatDeckFirebaseToState(loadedDeck, id)
          })
          setIsDeckLoading(false)
        })
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getDeckById(deckId)
  }, [deckId, uid, dispatch])

  return { deck, isDeckError, isDeckLoading }
}
