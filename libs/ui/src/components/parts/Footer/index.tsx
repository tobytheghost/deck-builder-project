import React from 'react'
import style from './footer.module.scss'
// import SocialLinks from '../SocialLinks'
import Container from '../Container'
import Column from '../Column'

const Footer = (): JSX.Element => {
  return (
    <footer className={style['footer']}>
      <Container>
        <Column align='center'>-Footer-</Column>
      </Container>
    </footer>
  )
}

export default Footer
