import {
  Column,
  Container,
  H1,
  P,
  Row,
  Section
} from '@deck-app/ui'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <main className='app'>
      <Section>
        <Container>
          <Row align='center'>
            <Column align='center'>
              <H1>404 - Page not found</H1>
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
