import React from 'react'
import Head from 'next/head'

const pageMeta: PageMeta = {
  title: 'Contact',
  description: 'A Magic: The Gathering Deck Builder',
  canonical: '/'
}

const Contact = (): JSX.Element => {
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
      <div>Contact</div>
    </>
  )
}

export default Contact
