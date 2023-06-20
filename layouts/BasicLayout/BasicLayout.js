import Head from 'next/head'
import Footer from '../../components/footer'
import Header from '../../components/header'

export default function BasicLayout({ children, title, project, platform, pageDescription, imageUrl, currentUrl }) {


  const titleActual = title ? title : `${project} | ${platform}`

  const regex = /(<([^>]+)>)/ig; // Expresión regular para encontrar todas las etiquetas HTML
  const description = project ? pageDescription.replace(regex, '') : '' // Remover todas las etiquetas HTML    

  return (
    <>
      <Head>
        <title>{titleActual}</title>

        <meta property="og:url" content={currentUrl} />

        <meta name='description' content={description} />
        <meta name='og:description' content={description} />
        <meta name='og:title' content={titleActual} />
        <meta property="og:image:type" content="image/png" />
        {
          imageUrl && (
            <meta name='og:image' content={imageUrl} />
          )
        }
        {/* <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

      </Head>

      <div>
        <Header />
      </div>
      {children}
      <Footer />
    </>
  )
}
