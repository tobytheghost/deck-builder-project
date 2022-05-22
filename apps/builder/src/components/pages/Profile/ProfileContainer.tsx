import { useAuth } from '../../../contexts/AuthContext'
import ProfileView from './ProfileView'
import { Navigate } from 'react-router-dom'
import { useProfile } from './useProfile'

const ProfileContainer = ({ profileId }: { profileId?: string }) => {
  const { currentUser } = useAuth()
  const uid = currentUser && currentUser.uid
  const lookupId = profileId || uid
  const { profileState, isError } = useProfile(lookupId)

  if (isError) return <Navigate to='/oops' />

  return <ProfileView currentUser={currentUser} profileState={profileState} lookupId={lookupId}/>
}

export default ProfileContainer
