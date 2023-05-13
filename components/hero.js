import React from 'react'
import arrow from '../assets/img/arrow.svg'
import Image from 'next/image'
import gradients from '../assets/img/gradients-shape.png'

export default function Hero() {
  return (
    <div>
      <section className="hero__section container center"> 
        <div className="hero__contain">
          <h1 className="main__title animate__animated animate__fadeInUp" >Web & Branding</h1>
          <h2 className={`main__subtitle animate__animated animate__fadeInUp`}>Transforma tu presencia digital
          </h2> 
          <a href="#contact"><button className="btn__talk animate__animated animate__fadeInUp">Hablemos</button></a>
          <a href="#services"><Image className="icon arrow animate__animated animate__fadeInUp" width='100' src={arrow} alt='arrow'/></a>                         
        </div>
      </section>
      <Image className="hero__gradients" width='800' src={gradients} alt='gradients'  priority/>                        
    </div>
  )
}

