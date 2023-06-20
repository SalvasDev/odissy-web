import Image from 'next/image'
import logo from '../assets/img/logo-odissy.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className="footer__section">
      <div className="container center">
        <div className="footer__company">
          <Link href="/">
            <Image className="logo__odissy" width='90' src={logo} alt='Logotype Odisy' />
          </Link>

          <div className="footer__company-info">
            <span>443 238 2668</span>
            <span>byodisy@gmail.com</span>
            <span>Morelia, México</span>
          </div>
        </div>
        <div className="footer__columns">
          <div className="footer__menu">
            <span>Menú</span>
            <Link href='/#services'>Servicios</Link>
            <Link href='/#projects'>Proyectos</Link>
            <Link href='/#about'>Nosotros</Link>
            <Link href='/#contact'>Contacto</Link>
          </div>

          <div className="footer__networks">
            <span>Redes</span>

            <a href='https://www.linkedin.com/company/odisy-std/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href='https://www.instagram.com/byodisy/' target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href='https://www.behance.net/odisy' target="_blank" rel="noopener noreferrer">Behance</a>
            <a href='https://dribbble.com/odisy' target="_blank" rel="noopener noreferrer">Dribbble</a>
          </div>
        </div>

      </div>
      <div className="footer__copy-politics">
        <p>© 2023 Odisy. Derechos reservados.</p>
        <a href="">Políticas de privacidad</a>
      </div>
    </section>
  )
}
