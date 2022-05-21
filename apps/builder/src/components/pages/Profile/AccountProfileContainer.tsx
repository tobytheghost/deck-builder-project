import { useEffect } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../firebase'
import { useProfileContext } from '../../../contexts/ProfileContext'
import ProfileView from './ProfileView'
import safeParseJson from '../../../helpers/safeParseJson'
import { profileStateActions } from '../../../contexts/ProfileStateReducer'

const ProfileContainer = () => {
  const { currentUser } = useAuth()
  const [state, dispatch] = useProfileContext()
  const uid = currentUser && currentUser.uid

  useEffect(() => {
    db.collection('decks')
      .where('user_id', '==', uid)
      .get()
      .then(querySnapshot => {
        const docs = querySnapshot.docs
        const deckData = docs.map(doc => {
          const data = doc.data()
          return {
            ...data,
            id: doc.id,
            list: safeParseJson(data['list'], true)
          }
        })
        dispatch({ type: profileStateActions.SET_DECKS, payload: { decks: deckData} })
      })
  }, [uid, dispatch])

  return <ProfileView currentUser={currentUser} profileState={state} />
}

export default ProfileContainer
