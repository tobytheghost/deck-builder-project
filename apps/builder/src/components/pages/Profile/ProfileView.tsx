import { Column, Container, H1, P, Row } from '@deck-app/ui'
import Page from '../../parts/Page'
import { FirebaseUser } from '../../../firebase'
import { ProfileStateTypes } from '../../../contexts/ProfileContext'
import DeckMiniPreview from '../../builder/DeckMiniPreview'

type ProfileViewTypes = {
  currentUser: FirebaseUser | null
  profileState: ProfileStateTypes
}

const ProfileView = ({ currentUser, profileState }: ProfileViewTypes) => {
  const { loading, decks } = profileState
  return (
    <Page>
      <Container>
        <Row>
          <Column>
            <H1>Profile</H1>
            <P>Email: {currentUser && currentUser.email}</P>
            {!loading &&
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
