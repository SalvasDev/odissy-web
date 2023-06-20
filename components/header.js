import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/img/logo-odissy.svg'
import lightMode from '../assets/img/light-mode.svg'
import darkMode from '../assets/img/dark-mode.svg'
import { isUsingDarkMode, setColorSchemeToLS, getColorSchemeFromLS, burgerBtn, positionAnchor } from '../helpers'


export default function Header() {

  const [checked, setChecked] = useState(false)

  const handleBurger = () => {
    burgerBtn()
  }


  useEffect(() => {

    positionAnchor()

    isUsingDarkMode()
    setChecked(isUsingDarkMode())

    var bodyElement = document.querySelector('body')
    let colorSheme = getColorSchemeFromLS()

    if (!colorSheme) return
    if (colorSheme === 'light') {
      bodyElement.classList.add('force-light')
      setChecked(false)
    } else {
      bodyElement.classList.add('force-dark')
      setChecked(true)
    }
  }, [])


  const changeTheme = () => {
    var bodyElement = document.querySelector('body')
    if (checked === false) {
      bodyElement.classList.remove('force-light')
      bodyElement.classList.add('force-dark')
      setColorSchemeToLS('dark')
      setChecked(true)
    } else {
      bodyElement.classList.remove('force-dark')
      bodyElement.classList.add('force-light')
      setColorSchemeToLS('light')
      setChecked(false)
    }
  }


  return (
    <div>
      {/* Fondo del menú */}
      <div className="menu__bg" id='menu__bg'></div>

      {/* Header section */}
      <section className="header__section center" id='start'>

        <Link href="/">
          <div className="logo">
            <Image className="logo__odissy" width='90' src={logo} alt='Logotype odissy' />
          </div>
        </Link>

        <div className="main__menu">
          <p className="menu__title">menú</p>

          {/* burger menu */}
          <div className='menu__container' id='menu__container'>
            <button
              className="btn-burg"
              id="btn-burg"
              onClick={handleBurger}
            >
              <div className="line1__btn-burg"></div>
              <div className="line2__btn-burg"></div>
              <div className="line3__btn-burg"></div>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <nav className="showMenuMobile " id='showMenuMobile' onClick={handleBurger} >
          <Link href='/' className="animate__animated animate__slideInDown">Inicio</Link>
          <Link href="/servicesPage" className="animate__animated animate__slideInDown">Servicios</Link>
          <Link href="/projectsPage" className="animate__animated animate__slideInDown">Proyectos</Link>
          <Link href="/aboutPage" className="animate__animated animate__slideInDown">Nosotros</Link>
          <Link href="/contactPage" className="animate__animated animate__slideInDown">Contacto</Link>
        </nav>


        {/* Theme lets talk group */}
        <div className="dark-mode-controls">
          <Image className="icon" width='25' src={lightMode} alt='Icon light mode' />
          <input
            type="checkbox"
            name="dark-toggle"
            id="dark-toggle"
            className="dark-toggle"
            checked={checked}
            onChange={changeTheme}
          />
          <label htmlFor="dark-toggle"></label>
          <Image className="icon" width='25' src={darkMode} alt='Icon dark mode' />
        </div>
      </section>
    </div>
  )
}
