import React from 'react'
import Navigation from '../Navigation'
import Logo from '../Logo'
import SocialLinks from '../SocialLinks'
import Container from '../Container'
import style from './header.module.scss'

const Header = (): JSX.Element => {
  return (
    <>
      <SocialLinks />
      <header className={style.header}>
        <Container>
          <Logo />
          <Navigation />
        </Container>
      </header>
    </>
  )
}

export default Header
