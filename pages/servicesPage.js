import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import Services from '../components/services'

import 'animate.css'

export default function ServicesPage() {

  return (
    <>
      <BasicLayout title='Servicios page' pageDescription={'En esta página encontrarás más detalles sobre como funcionan nuestros servicios.'}>
        <section className="section__services-page">
          <Services />
        </section>
      </BasicLayout>
    </>
  )
}


