import Head from 'next/head'
import Footer from '../../components/footer'
import Header from '../../components/header'


export default function BasicLayout({ children, title, project, platform, pageDescription, imageFullUrl, currentUrl }) {

  const titleActual = title ? title : `${project} | ${platform}`

  const regex = /(<([^>]+)>)/ig; // Expresión regular para encontrar todas las etiquetas HTML
  const description = project ? pageDescription.replace(regex, '') : '' // Remover todas las etiquetas HTML    

  return (
    <>
      <Head>
        <title>{titleActual}</title>
        <meta property="og:url" content={currentUrl} />
        <meta name='description' content={description} />
        <meta name='og:title' content={titleActual} />
        <meta name='og:description' content={description} />
        <meta property="og:image:type" content="image/png" />
        {
          imageFullUrl && (
            <meta name='og:image' content={imageFullUrl} />
          )
        }

      </Head>

      <div>
        <Header />
      </div>
      {children}
      <Footer />
    </>
  )
}
