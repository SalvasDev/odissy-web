import Image from 'next/image'
import { Poppins } from '@next/font/google'
import instagram from '../assets/img/Instagram.svg'
import behance from '../assets/img/behance.svg'
import dribbble from '../assets/img/dribbble.svg'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal']
})
const Socialbar = () => {
  return (
    <div className={`social__bar ${poppins.className}`}>
      <span className="follow">Follow</span>
      <a href="https://www.instagram.com/byodisy/" target="_blank" rel="noopener noreferrer"><Image width='24' className="icon" src={instagram} alt="Icon instagram" /></a>
      <a href="https://www.behance.net/odisy" target="_blank" rel="noopener noreferrer"><Image width='24' className="icon" src={behance} alt="Icon Behance" /></a>
      <a href="https://dribbble.com/odisy" target="_blank" rel="noopener noreferrer"><Image width='42' className="icon" src={dribbble} alt="Icon Dribble" /></a>
    </div>
  )
}
export default Socialbar
