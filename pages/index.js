import Head from 'next/head'
import { useEffect, useState } from 'react'
import BasicLayout from '../layouts/BasicLayout'
import Hero from '../components/hero'
import Socialbar from '../components/socialBar'
import IndexBar from '../components/indexBar'
import { IndexContextProvider } from '../context/IndexContext'
import Services from '../components/services'
import Projects from '../components/projects'
import Contact from '../components/contact'
import About from '../components/about'
import 'animate.css'
import ButtonDetail from '../components/buttonDetail'
import { positionAnchor } from '../helpers'


export default function Home() { 

const [showVerticalBtn, setShowVerticalBtn ] = useState(false)

useEffect(() => {

      //Posiciona el puntero en el topo de la página dejando su margen respectivo
      positionAnchor()

      const handleScroll = () => {
        const distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const distanceInPercentage = (distanceFromTop / totalHeight) * 100;

        if (distanceInPercentage >= 5 ) { // Cambia este valor para el porcentaje que desees

          setShowVerticalBtn(true)  
        } else {
          setShowVerticalBtn(false)
        }
       };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
      <>
      <Head>
         <title>Odisy web</title>
         <meta name='description' content='Odisy es una empresa dedicada al diseño y desarrollo web en la ciudad de Morelia. Somos especialistas en diseño y desarrollo web, páginas web, landing pageas e identidad corporativa como logotipos, diseño gráfico profesional, diseño editorial y creación de contenido para redes sociales.'/>         
      </Head>
        <IndexContextProvider>
          <BasicLayout>
              <Hero />
              <Socialbar />
              <IndexBar />
              <Services />
              <Projects />
              <About />
              <Contact />
              { showVerticalBtn && <ButtonDetail smart__class='vertical__arrow-btn' /> }
          </BasicLayout>
        </IndexContextProvider>
      </>
  )
}


  // useEffect(() => {
  //   // Configurar scrollRestoration en manual solo en la página de inicio
  //   if (router.pathname === '/*') {
  //     if ('scrollRestoration' in window.history) {
  //       window.history.scrollRestoration = 'manual';
  //     }
  //   }

  //   // Limpiar la propiedad scrollRestoration en un efecto de limpieza cuando se desmonte el componente
  //   return () => {
  //     if ('scrollRestoration' in window.history) {
  //       window.history.scrollRestoration = 'auto';
  //     }
  //   }
  // }, [router.pathname]);

















// import Head from 'next/head'
// import Image from 'next/image'
// import { Poppins } from '@next/font/google'
// import Link from 'next/link'
// import BasicLayout from '../layouts/BasicLayout'
// import Hero from '../components/hero'
// import { createContext, useState } from 'react'

// const poppins = Poppins({
//   weight: ['400', '500', '700'],
//   style: ['normal']
// })

// export const ThemeContext = createContext(null)
 
// export default function Home() {
//   const [theme, setTheme] = useState('light')
  
//   const toggleTheme = () => {
//     setTheme((curr) => (curr === 'light' ? 'dark': 'light'))
//   }

//   return (
//     <ThemeContext.Provider value={{theme, setTheme}}>
//       <div id={theme}>
//         <BasicLayout>
//             <Hero />
//         </BasicLayout>
//       </div>
//     </ThemeContext.Provider>
//   )
// }
