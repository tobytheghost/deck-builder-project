import React from 'react'
import { H3, P } from '@deck-app/ui'
import { useAuth } from '../../../contexts/AuthContext'
import Page from '../../parts/Page'

const Profile = () => {
  const { currentUser } = useAuth()

  return (
    <Page>
      <H3>Profile</H3>
      <P>Email: {currentUser && currentUser.email}</P>
    </Page>
  )
}

export default Profile
