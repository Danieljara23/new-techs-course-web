import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Basic, Combined, Animated, bounce } from '../shared/styles'
import styled from '@emotion/styled'

const SomeButton = styled.button`
  color: ${props => props.theme.colors.primary};
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Basic>Cool Styles</Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
      <SomeButton>Hello World</SomeButton>
      <Animated animation={bounce}>Let's bounce.</Animated>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
