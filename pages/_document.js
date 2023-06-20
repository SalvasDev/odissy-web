import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Etiquetas para Facebook */}
        <meta name="google-site-verification" content="JzSQH_lxAd9eEJDh_-lDjH7dFsvhf-gSC1yvGrQ9v9g" />
        {/* <meta property="og:url" content="https://www.byodisy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/imageHome.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


