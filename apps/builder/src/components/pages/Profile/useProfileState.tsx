import { useEffect, useState } from 'react'
import { useProfileContext } from '../../../contexts/ProfileContext'
import { useDecks } from './useDecks'
import { useUser } from '../../../hooks/useUser'
import { profileStateActions } from '../../../contexts/ProfileStateReducer'

export const useProfileState = (lookupId: string | null) => {
  const [isProfileLoading, setIsProfileLoading] = useState(true)
  const [isProfileError, setIsProfileError] = useState(true)
  const [profileState, dispatch] = useProfileContext()
  const { decks, isDecksError, isDecksLoading } = useDecks(lookupId)
  const { user, isUserError, isUserLoading } = useUser(lookupId)

  useEffect(() => {
    if(isUserLoading || isDecksLoading) return
    dispatch({
      type: profileStateActions.SET_PROFILE,
      payload: { decks, user }
    })
    setIsProfileLoading(false)
  }, [decks, user, dispatch, isUserLoading, isDecksLoading])

  useEffect(() => {
    setIsProfileError(isDecksError && isUserError)
  }, [isDecksError, isUserError])

  return {
    profileState,
    isProfileError,
    isProfileLoading
  }
}
