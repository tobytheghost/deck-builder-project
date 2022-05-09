import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/parts/Header'
import Footer from '../components/parts/Footer'
import './styles.scss'

function CustomApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='theme-color' content='#ff9800' />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Deck Builder' />
        <meta property='og:image' content='' />
        <meta name='twitter:site' content='' />
        <meta name='twitter:title' content='Deck Builder' />
        <meta name='twitter:image' content='' />
      </Head>
      <Header />
      <main className='app'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default CustomApp
