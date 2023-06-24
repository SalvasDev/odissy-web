import Image from 'next/image'
import usImg from '../assets/img/us-img.jpg'

export default function About() {
  return (
    <section className="about__section animate__animated animate__fadeInUp" id='about'>
      <div className="about__container">
        <Image className="about__img" height='900' src={usImg} alt='Branding image' />
        <div className="about__text" id='ind__three'>
          <h2 className="about__title"><span>03 </span>Nosotros</h2>
          <p>Somos un estudio de diseño y desarrollo web ubicado en Morelia.

            <br /><br /> Ayudamos a pequeñas y medianas empresas a dar a conocer sus productos o servicios en internet.
            <br /><br /> Creamos soluciones sencillas con tecnología y diseño.
          </p>
          <div className="decora__text"></div>
        </div>
      </div>
    </section>
  )
}
