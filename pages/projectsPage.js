import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import Projects from '../components/projects'
import 'animate.css'



export default function ProjectsPage() {

  return (
    <>
      <BasicLayout title='Proyectos page' pageDescription='Aqui te mostramos una recopilación de nuestros mejores proyectos en diseño gráfico, branding y desarrollo y diseño de sitios web'>
        <section className="section__page">
          <Projects />
        </section>
      </BasicLayout>
    </>
  )
}
