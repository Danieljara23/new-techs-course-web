import 'antd/dist/antd.css'
import '../styles/globals.css'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { globalStyles } from '../shared/styles'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../shared/theme';
import { Head } from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>

        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  )
}

export default MyApp