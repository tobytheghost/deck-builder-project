import { Container } from '@deck-app/ui'
import Navigation from '../Navigation'
import style from './header.module.scss'

const Header = (): JSX.Element => {
  return (
    <header className={style['header']}>
      <Container align='center'>
        <div>Welcome!</div>
        <Navigation />
      </Container>
    </header>
  )
}

export default Header
