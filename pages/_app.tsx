import {AppProps} from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import {ThemeProvider, useMediaQuery} from '@material-ui/core'
import {createTheme} from '../theme'

const MyApp = ({Component, pageProps}: AppProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => createTheme(prefersDarkMode), [prefersDarkMode])

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
