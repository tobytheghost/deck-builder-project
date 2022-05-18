import React from 'react'
import { Container } from '@deck-app/ui'
import style from './header.module.scss'
import Navigation from '../Navigation'

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
