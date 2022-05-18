import React from 'react'
import Navigation from '../Navigation'
import Logo from '../../../../../libs/ui/src/components/parts/Logo'
import SocialLinks from '../../../../../libs/ui/src/components/parts/SocialLinks'
import Container from '../../../../../libs/ui/src/components/parts/Container'
import style from './header.module.scss'

const Header = (): JSX.Element => {
  return (
    <>
      <SocialLinks />
      <header className={style['header']}>
        <Container align='center'>
          <Logo />
          <Navigation />
        </Container>
      </header>
    </>
  )
}

export default Header
