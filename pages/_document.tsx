import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheets} from '@material-ui/core'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
    }
  }

  render() {
    return <Html>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Material+Icons' rel='stylesheet'/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  }
}

export default MyDocument
