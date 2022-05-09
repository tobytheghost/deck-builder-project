import React from 'react'
import styles from './social_links.module.scss'
import { SocialIcon } from 'react-social-icons'
import Container from '../Container'

const SocialLinks = () => {
  return (
    <section className={styles.social_links}>
      <Container>
        <ul>
          <li>
            <Icon url={`https://twitter.com/tobytheghost/`} />
          </li>
          <li>
            <Icon url={`https://facebook.com/tobytheghost/`} />
          </li>
          <li>
            <Icon url={`https://linkedin.com/in/tobygates/`} />
          </li>
          <li>
            <Icon url={`https://github.com/tobytheghost/`} />
          </li>
        </ul>
      </Container>
    </section>
  )
}

function Icon ({ url }) {
  return (
    <SocialIcon
      url={url}
      style={{ height: 20, width: 20 }}
      bgColor={`#dad7cd`}
      target='_blank'
    />
  )
}

export default SocialLinks
