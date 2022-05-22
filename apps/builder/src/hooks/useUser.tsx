import { useEffect, useState } from 'react'
import { initialUserState } from '../contexts/ProfileStateReducer'
import { db } from '../firebase'
import { UserStateType } from '../contexts/ProfileTypes'

export const useUser = (lookupId: string | null) => {
  const [user, setUser] = useState(initialUserState)
  const [isUserError, setIsUserError] = useState(false)
  const [isUserLoading, setIsUserLoading] = useState(true)

  useEffect(() => {
    if (!lookupId) return
    const userQuery = db.collection('users').where('user_id', '==', lookupId)
    const unsubscribeUser = userQuery.onSnapshot(
      querySnapshot => {
        const docs = querySnapshot.docs
        const user = docs[0].data() as UserStateType
        setUser(user)
        setIsUserLoading(false)
      },
      err => {
        console.log(err)
        setIsUserError(true)
      }
    )
    return () => unsubscribeUser()
  }, [lookupId])

  return { user, isUserError, isUserLoading }
}
