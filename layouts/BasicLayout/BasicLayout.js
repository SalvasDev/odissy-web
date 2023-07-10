import Head from 'next/head'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function BasicLayout({ children, title, project, platform, pageDescription, imageUrl, currentUrl }) {

  const router = useRouter();


  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments) }
      gtag('js', new Date());
      gtag('config', 'G-WQYQ1DMCWH');
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);


  const titleActual = title ? title : `${project} | ${platform}`

  const regex = /(<([^>]+)>)/ig; // Expresión regular para encontrar todas las etiquetas HTML
  const description = project ? pageDescription.replace(regex, '') : '' // Remover todas las etiquetas HTML    

  const actualImageUrl = title === 'Diseño y desarrollo de páginas web y logotipos en Morelia'  `https://www.byodisy.com${imageUrl}`;
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
            <meta property="og:image" content="/imageHome.jpg" />
          )
        }
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

      </Head>

      <div>
        <Header />
      </div>
      {children}
      <Footer />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WQYQ1DMCWH"></Script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-WQYQ1DMCWH');
          `,
        }}
      />
    </>
  )
}
