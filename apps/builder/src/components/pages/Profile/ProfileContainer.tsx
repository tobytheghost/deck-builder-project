import { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../firebase'
import { useProfileContext } from '../../../contexts/ProfileContext'
import ProfileView from './ProfileView'
import safeParseJson from '../../../helpers/safeParseJson'
import { profileStateActions } from '../../../contexts/ProfileStateReducer'
import { Navigate } from 'react-router-dom'

const ProfileContainer = ({ profileId }: { profileId: string }) => {
  const { currentUser } = useAuth()
  const [state, dispatch] = useProfileContext()
  const [isError, setIsError] = useState(true)

  if (isError) return <Navigate to='/oops' />

  return <ProfileView currentUser={currentUser} profileState={state} />
}

export default ProfileContainer
