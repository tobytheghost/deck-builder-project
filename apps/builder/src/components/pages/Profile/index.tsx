import AccountProfileContainer from './AccountProfileContainer'
import ProfileContainer from './ProfileContainer'
import ProfileContextProvider from '../../../contexts/ProfileContext'
import profileReducer, {
  initialProfileState
} from '../../../contexts/ProfileStateReducer'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { profileId } = useParams()
  return (
    <ProfileContextProvider reducer={profileReducer} initialState={initialProfileState}>
      {profileId ? <ProfileContainer profileId={profileId} /> : <AccountProfileContainer /> }
    </ProfileContextProvider>
  )
}

export default Profile
