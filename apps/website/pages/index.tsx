import React from 'react'
import Head from 'next/head'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'

const pageMeta: PageMeta = {
  title: 'Home',
  description: 'A Magic: The Gathering Deck Builder',
  canonical: '/'
}

const hero = {
  title: 'The Deck Builder Project',
  subtitle: 'A Magic: the Gathering Deck Builder',
  cta: 'Get Started'
}

const about = {
  title: (
    <>
      Find out more about the{' '}
      <span style={{ color: '#3a5a40', fontWeight: 600 }}>Deck Builder Project</span>
    </>
  ),
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{pageMeta.title} | Deck Builder</title>
        <meta name='description' content={pageMeta.description} />
        <link rel='canonical' href={pageMeta.canonical}></link>
        <meta
          property='og:site_name'
          content={`${pageMeta.title} | Deck Builder`}
        />
        <meta property='og:url' content={pageMeta.canonical} />
        <meta property='og:description' content={pageMeta.description} />
        <meta name='twitter:url' content={pageMeta.canonical} />
        <meta name='twitter:description' content={pageMeta.description} />
      </Head>
      <Hero {...hero} />
      <About {...about} />
    </>
  )
}

export default Home
