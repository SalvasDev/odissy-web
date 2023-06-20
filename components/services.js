import Image from 'next/image'
import servicesImg from '../assets/img/laptop.png'
import 'animate.css'


export default function Services() {
  return (
    <section className="services__section animate__animated animate__fadeInUp" id='services'>
      <div className="services__container" id='ind__one'>
        <Image className="services__img" height='1080' src={servicesImg} alt='Branding image' />

        <div className="services__text"  >
          <h2 className="services__title"><span>01 </span>Servicios</h2>
          <h3 className="services__subtitle">Sitios y web apps</h3>
          <p>Diseñamos y desarrollamos soluciones en tecnología para la web. <br /></p>
          <h3 className="services__subtitle">Branding y Diseño</h3>
          <p>Creamos marcas atractivas y únicas para que las empresas sean recordadas y amadas por sus clientes.<br /></p>
          <div className="decora__text ml-0"></div>
        </div>
      </div>
    </section>
  )
}
