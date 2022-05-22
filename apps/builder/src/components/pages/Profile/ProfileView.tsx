import { Column, Container, H1, P, Row } from '@deck-app/ui'
import Page from '../../parts/Page'
import { FirebaseUser } from '../../../firebase'
import { ProfileStateTypes } from '../../../contexts/ProfileTypes'
import DeckMiniPreview from '../../builder/DeckMiniPreview'

interface ProfileViewTypes {
  currentUser: FirebaseUser | null
  profileState: ProfileStateTypes
  lookupId: string | null
}

const ProfileView = ({
  currentUser,
  profileState,
  lookupId
}: ProfileViewTypes) => {
  const isEditable = currentUser && lookupId && currentUser.uid === lookupId
  const { loading, decks, user } = profileState
  const username = user && user.display_name
  return (
    <Page>
      <Container>
        <Row>
          <Column>
            <H1>{username ? `${username}'s ` : ''}Profile</H1>
            <P>Display Name: {user && user.display_name}</P>
            <P>Member Since: {user && user.user_since && user.user_since.toDate().toLocaleDateString()}</P>
            <P>Last Online: {user && user.last_active && user.last_active.toDate().toLocaleDateString()}</P>
            {!loading &&
              decks &&
              decks.map((deck, i) => {
                if (!deck) return ''
                return <DeckMiniPreview {...deck} key={i} />
              })}
          </Column>
        </Row>
      </Container>
    </Page>
  )
}

export default ProfileView
