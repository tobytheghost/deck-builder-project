import React from 'react'
import Button from '../../elements/Button'
import Column from '../../parts/Column'
import Container from '../../parts/Container'
import Section from '../../parts/Section'

import styles from './hero.module.scss'

type heroProps = {
  title: string
  subtitle: string
  cta: string
}

const Hero = ({ title, subtitle, cta }: heroProps) => {
  const Title = () => {
    if (!title) return
    return (
      <h1 className={styles.h1}>
        {title}
      </h1>
    )
  }

  const Subtitle = () => {
    if (!subtitle) return
    return (
      <h2 className={styles.h2}>
        {subtitle}
      </h2>
    )
  }

  const Cta = () => {
    if (!cta) return
    return <Button className={styles.button}>{cta}</Button>
  }
  return (
    <Section className={styles.hero}>
      <Container align='center'>
        <Column>
          <Title />
          <Subtitle />
          <Cta />
        </Column>
      </Container>
    </Section>
  )
}

export default Hero
