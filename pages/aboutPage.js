import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import About from '../components/about'
import 'animate.css'

export default function ProjectsPage() {

  return (
    <>
      <BasicLayout title='Acerca de nosotros page' pageDescription='Aquí encontrarás información más detallada sobre nuestro origen y proceso de crecimiento hasta llegar hacer quienes somos hoy.'>
        <section className="section__about-page">
          <About />
        </section>
      </BasicLayout>
    </>
  )
}
