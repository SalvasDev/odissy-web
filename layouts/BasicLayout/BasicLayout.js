import Head from 'next/head'
import Footer from '../../components/footer'
import Header from '../../components/header'

export default function BasicLayout({ children, title, project, platform, pageDescription, imageUrl, currentUrl }) {


  const titleActual = title ? title : `${project} | ${platform}`

  const regex = /(<([^>]+)>)/ig; // Expresión regular para encontrar todas las etiquetas HTML
  const description = project ? pageDescription.replace(regex, '') : '' // Remover todas las etiquetas HTML    

  const actualImageUrl = `https://www.byodisy.com${imageUrl}`;
  return (
    <>
      <Head>
        <title>{titleActual}</title>

        <meta name='og:title' content={titleActual} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta name='description' content={description} />
        <meta name='og:description' content={description} />
        {
          imageUrl && (
            <meta name='og:image' content={actualImageUrl} />
          )
        }
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

      </Head>

      <div>

        <Header />
      </div>
      {children}
      <Footer />
    </>
  )
}
