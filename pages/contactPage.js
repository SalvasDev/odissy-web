import React from 'react'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import Contact from '../components/contact'
import 'animate.css'



export default function ContactPage() {
  return (
    <>
      <BasicLayout title='Contacto page' pageDescription='Aquí puedes enviarnos tus datos para poder comuncarnos contigo'>
        <section className="section__page">
          <Contact />
        </section>
      </BasicLayout>
    </>
  )
}