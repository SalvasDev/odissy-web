import FormContact from './formContact'

export default function Contact() {
  return (
    <section className='contact__section animate__animated animate__fadeInUp' id='contact'>
      <div className="contact__container">
        <div className="contact__header" id='ind__four'>
          <h2 className="contact__title"  ><span>04 </span>Hablemos</h2>
          <p className="contact__tagline">Por favor llene el siguiente formulario si desea una cotización. Le contactaremos en breve.</p>
        </div>

        {/* Grid contact form */}
        <div className="form__section" >

          <div className="form__inputs" >
            <FormContact />
          </div>

          <div className="contact__info">
            <span>443 238 2668</span>
            <span>byodisy@gmail.com</span>
            <span>Morelia, México</span>
          </div>

        </div>

      </div>
    </section>
  )
}
