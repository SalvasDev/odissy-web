import Image from 'next/image'
import { useEffect } from 'react'
import { positionAnchor } from '../helpers'
import arrow from '../assets/img/arrow.svg'


const ButtonDetail = ({ smart__class }) => {

useEffect(()=> {
  positionAnchor()
},[])

  return (
    <a href='#start' className={ smart__class }><Image className="arrow__btn" width='30' src={arrow} alt='arrow'/></a>    
  )
}

export default ButtonDetail
