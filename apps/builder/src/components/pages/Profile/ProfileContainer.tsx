import { useAuth } from '../../../contexts/AuthContext'
import ProfileView from './ProfileView'
// import { Navigate } from 'react-router-dom'
import { useProfileState } from './useProfileState'
import { useEffect, useState } from 'react'
import Loading from '../../Loading'

const ProfileContainer = ({ profileId }: { profileId?: string | undefined }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { currentUser } = useAuth()
  const uid = currentUser && currentUser.uid
  const lookupId = profileId || uid
  const { profileState, isProfileError, isProfileLoading } = useProfileState(lookupId)

  useEffect(() => {
    setIsLoading(false)
  }, [isProfileLoading])

  if (isProfileError) return null
  if (isLoading) return <Loading content={'Loading profile...'}/>

  return <ProfileView currentUser={currentUser} profileState={profileState} lookupId={lookupId}/>
}

export default ProfileContainer
