import React from 'react'
import Header from '../Header'
import { Section, Row } from '@deck-app/ui'
import ProfileContextProvider from '../../../contexts/ProfileContext'
import profileReducer, {
  initialProfileState
} from '../../../contexts/ProfileStateReducer'

type PageType = {
  children: React.ReactNode
}

const Page = ({ children }: PageType) => {
  return (
    <>
      <Header />
      <main className='app'>
        <ProfileContextProvider
          reducer={profileReducer}
          initialState={initialProfileState}
        >
          <Section>
            <Row align='center'>{children}</Row>
          </Section>
        </ProfileContextProvider>
      </main>
    </>
  )
}

export default Page
