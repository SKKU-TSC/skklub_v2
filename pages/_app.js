import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
