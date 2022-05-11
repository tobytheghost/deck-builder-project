/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Column from '../../parts/Column'
import Container from '../../parts/Container'
import Section from '../../parts/Section'
import H2 from '../../elements/H2'
import H3 from '../../elements/H3'
import P from '../../elements/P'

import styles from './about.module.scss'

type aboutProps = {
  title: string | React.ReactNode
  subtitle: string | React.ReactNode
}

const imageUrl =
  '/assets/depositphotos_270270228-stock-photo-sochi-russia-may-17-2019.jpg'

const About = ({ title, subtitle }: aboutProps) => {
  return (
    <Section className={styles.about}>
      <Container>
        <Column align='center'>
          <H2 color='green'>About</H2>
          <H3>{title}</H3>
          <P>{subtitle}</P>
        </Column>
      </Container>
      <Container>
        <Column>
          <img src={imageUrl} alt={'People playing magic'} style={{ maxWidth: '100%' }}/>
        </Column>
        <Column>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Column>
      </Container>
    </Section>
  )
}

About.defaultProps = {}

export default About
