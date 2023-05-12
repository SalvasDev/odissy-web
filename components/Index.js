import Link from 'next/link'
import React, {useContext, useEffect, useState} from 'react'
import IndexContext from '../context/IndexContext'


const Index = ({ind}) => {

  const { selected, setSelected } = useContext(IndexContext)
  var {selec, indexSelected } = selected    

  const { } = useContext(IndexContext)



  useEffect(()=> {

    ///// Observer Start //////
    const observerStart = new IntersectionObserver( function(entries) {
      if ( entries[0].isIntersecting ) {
        const actualIndex = {
        selec : true,
        indexSelected : 'Start'      
      }    
     
      setSelected( actualIndex )

      } else {
        return      
      }
    })

    // Element to observe
    observerStart.observe(document.querySelector('#start'));


    ///// Observer Services //////
    const observer1 = new IntersectionObserver( function(entries) {

      if ( entries[0].isIntersecting ) {
  
        var contMenu = document.querySelector('.services__section')
        contMenu.classList.add('animate__fadeInUp')

        const actualIndex = {
        selec : true,
        indexSelected : '01'      
      }    

      setSelected( actualIndex )

      } else {
        return
        
      }
    })


    // Element to observe
    observer1.observe(document.querySelector('#ind__one'));



    ///// Observer Projects //////
    const observer2 = new IntersectionObserver( function(entries) {

      if ( entries[0].isIntersecting ) {

        var contMenu = document.querySelector('.projects__section')
        contMenu.classList.add('animate__fadeInUp')

        const actualIndex = {
        selec : true,
        indexSelected : '02'      
      }    

      setSelected( actualIndex )


      } else {
        return
        
      }
    })

    // Element to observe
    observer2.observe(document.querySelector('#ind__two'));


    ///// Observer Us ///// 
    const observer3 = new IntersectionObserver( function(entries) {

      if ( entries[0].isIntersecting ) {

        var contMenu = document.querySelector('.about__section')
        contMenu.classList.add('animate__fadeInUp')
      
        const actualIndex = {
        selec : true,
        indexSelected : '03'      
      }    

      setSelected( actualIndex )

      } else {
        return
        
      }
    })
    // Element to observe
    observer3.observe(document.querySelector('#ind__three'));

    ///// Observer Contact //////
    const observer4 = new IntersectionObserver( function(entries) {

      if ( entries[0].isIntersecting ) {

        var contMenu = document.querySelector('.contact__section')
        contMenu.classList.add('animate__fadeInUp')

        const actualIndex = {
        selec : true,
        indexSelected : '04'      
      }    
      setSelected( actualIndex )
      
      } else {
        return
        
      }
    })

    // Element to observe
    observer4.observe(document.querySelector('#ind__four'));


  },[])

  var newInd = 
      ind === 'Start' ? 'start' 
      : ind === '01' ? 'ind__one' 
      : ind === '02' ? 'ind__two' 
      : ind === '03' ? 'ind__three' 
      : ind === '04' ? 'ind__four' 
      : null

  var identi = '#'+newInd  

  var btnSelected = selec && (indexSelected === ind)  ? 'index__item selected' : 'index__item'  
  
  return (
        <a 
            href={identi}
            className= { btnSelected }
        >
            {ind}
         </a>
  )
}

export default Index
