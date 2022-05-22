import { useEffect, useState } from 'react'
import { useProfileContext } from '../../../contexts/ProfileContext'
import { db } from '../../../firebase'
import safeParseJson from '../../../helpers/safeParseJson'
import { profileStateActions } from '../../../contexts/ProfileStateReducer'
import { useUser } from '../../../hooks/useUser'

export const useProfile = (lookupId: string | null) => {
  const [profileState, dispatch] = useProfileContext()
  const [isError, setIsError] = useState(false)
  const { user, isUserError } = useUser(lookupId)

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
        dispatch({
          type: profileStateActions.SET_DECKS,
          payload: { decks: deckData }
        })
      },
      err => {
        console.log(err)
        setIsError(true)
      }
    )
    return () => unsubscribeDecks()
  }, [lookupId, dispatch])

  if (!isUserError) setIsError(true)

  dispatch({
    type: profileStateActions.SET_USER,
    payload: { user }
  })

  return { profileState, isError }
}
