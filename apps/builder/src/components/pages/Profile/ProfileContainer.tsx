import { useAuth } from '../../../contexts/AuthContext'
import ProfileView from './ProfileView'
import { Navigate } from 'react-router-dom'
import { useProfileState } from './useProfileState'

const ProfileContainer = ({ profileId }: { profileId?: string }) => {
  const { currentUser } = useAuth()
  const uid = currentUser && currentUser.uid
  const lookupId = profileId || uid
  const { profileState, isProfileError, isProfileLoading } = useProfileState(lookupId)

  if (isProfileError) return <Navigate to='/oops' />
  if (isProfileLoading) return null

  return <ProfileView currentUser={currentUser} profileState={profileState} lookupId={lookupId}/>
}

export default ProfileContainer
