import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { sendEmail } from '../helpers/sendEmail'

export default function FormContact() {

const [formSent, setFormSent] = useState(false)

return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          telefono: '',
          email: '',
          comentario: ''
        }}
        validate={(values) => {
          const errores = {}

          //Validation for name
          if (!values.nombre) {
            errores.nombre = 'por favor ingresa un nombre'
          } else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            errores.nombre='El nombre solo puede contener letras y espacios'
          } 
       
        
          //Validation for email
          if ( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email) && values.email !== '' ) {
            errores.email='El correo solo puede contener letras, número, puntos, guiones y guión bajo'
          }     

         
          //Validation for telephone
          if (!values.telefono) {
            errores.telefono = 'por favor ingresa un número de teléfono'
          }          
         return errores
        }}
          

        onSubmit={ (values, { setSubmitting, resetForm } ) => {

          sendEmail(values);
          resetForm()
          setFormSent(true)
          setSubmitting(false);
          setTimeout(() => setFormSent(false), 5000)
        }}
  
      >
        
        {({ errors })=>(
          <Form className="formulario">
            <div>
              <label htmlFor='nombre'>Nombre</label>
              <Field 
                type="text" 
                name='nombre'
                id='nombre'
              />
              <ErrorMessage name='nombre' component={()=> (
                 <div className="error">{errors.nombre}</div>
              )}/> 

            </div>                     

            <div>
              <label htmlFor='empresa'>Empresa</label>
              <Field 
                type="text" 
                name='empresa'
                id='empresa'
              />
            </div>

            <div>
              <label htmlFor='telefono'>Teléfono</label>
              <Field 
                type="text" 
                name='telefono'
                id='telefono'  
              />
              <ErrorMessage name='telefono' component={()=> (
                 <div className="error">{errors.telefono}</div>
              )}/>               
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <Field 
                type='email' 
                name='email'
                id='email'
              />
              <ErrorMessage name='email' component={()=> (
                 <div className="error">{errors.email}</div>
              )}/> 
            </div>
            <div>
              <label htmlFor='comentario'>¿Cómo podemos ayudarle?</label>
              <Field as='textarea'
                cols="30" 
                rows="2"
                type='text-area' 
                name='comentario'
                id='comentario'
              >
              </Field> 

              <div className="form__button">
                <button
                  className="btn__send"
                  type='submit'
                >
                Enviar   
                </button>
                { formSent && <p className="success">Información enviada con éxito!!</p>}
            
              </div>
      
            </div>

          </Form>
        )}
      </Formik>
    </>
  )
}






///////////////////////////////////////////////////////////////////////////////////

// CÓDIGO SIN MODIFICAR PARA APRENDER ANTES DE CAMBIAR EL COMPONENTE FORM Y ELIMINAR
// VARIAS COSAS PARA HACER MAS CORTO EL CODIGO

//  {({ errors, values, touched, handleSubmit, handleChange, handleBlur })=>(
//           <form className="formulario" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor='nombre'>Nombre</label>
//               <input 
//                 type="text" 
//                 name='nombre'
//                 id='nombre'
//                 value={values.nombre}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
//             </div>           
//             <div>
//               <label htmlFor='cargo'>Cargo</label>
//               <input 
//                 type="text" 
//                 name='cargo'
//                 id='cargo'
//                 value={values.correo}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//              {errors.cargo && <div className="error">{errors.cargo}</div>}

//             </div>

//             <div>
//               <label htmlFor='empresa'>Empresa</label>
//               <input 
//                 type="text" 
//                 name='empresa'
//                 id='empresa'
//                 value={values.empresa}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>

//             <div>
//               <label htmlFor='telefono'>Teléfono</label>
//               <input 
//                 type="text" 
//                 name='telefono'
//                 id='telefono'
//                 value={values.telefono}
//                 onChange={handleChange}
//                 onBlur={handleBlur}              
//               />
//             </div>

//             <div>
//               <label htmlFor='email'>Email</label>
//               <input 
//                 type='email' 
//                 name='email'
//                 id='email'
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//              {touched.email && errors.email && <div className="error">{errors.email}</div>}              
//             </div>
//             <div>
//               <label htmlFor='comentario'>¿Cómo podemos ayudarle?</label>
//               <textarea 
//                 cols="30" 
//                 rows="2"
//                 type='text-area' 
//                 name='comentario'
//                 id='comentario'
//                 value={values.comentario}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               >
//               </textarea> 

//               <div className="form__button">
//                 <button
//                   className="btn__send"
//                   type='submit'
//                 >
//                 Enviar   
//                 </button>
//                 { formSent && <p className="success">Información enviada con éxito!!</p>}
            
//               </div>
      
//             </div>

//           </form>



