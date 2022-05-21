import {
  Column,
  Container,
  H2,
  P,
  Row,
  Section,
  SocialLinks
} from '@deck-app/ui'
import { Link } from 'react-router-dom'
import styles from '../../app.module.scss'

export const ErrorPage = () => {
  return (
    <main className='app'>
      <Section>
        <Container>
          <Row align='center'>
            <Column align='center'>
              <H2 type='header'>404 - Page not found</H2>
              <P>
                <Link to='/'>Go Home</Link>
              </P>
            </Column>
          </Row>
        </Container>
      </Section>
    </main>
  )
}
