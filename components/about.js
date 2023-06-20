import Image from 'next/image'
import usImg from '../assets/img/us-img.jpg'

export default function About() {
  return (
    <section className="about__section animate__animated animate__fadeInUp" id='about'>
      <div className="about__container">
        <Image className="about__img" height='900' src={usImg} alt='Branding image' />
        <div className="about__text" id='ind__three'>
          <h2 className="about__title"><span>03 </span>Nosotros</h2>
          <p>Somos un estudio de diseño y desarrollo de sitios y aplicaciones web.
            <br /><br /> Nuestro objetivo es ofrecer soluciones a problemas de comunicación, mediante el diseño digital y la informática, utilizando para esto herramientas de software destinadas a la web.
            <br /><br />Asesoramos a profesionistas y a pequeñas y medianas empresas.
          </p>
          <div className="decora__text"></div>
        </div>
      </div>
    </section>
  )
}
