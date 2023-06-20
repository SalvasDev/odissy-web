import Image from 'next/image'
import Link from 'next/link'

export default function Thumbnail({ img, area, name }) {
  return (
    <div className="thumbnail__container animate__animated animate__fadeInUp">
      <Image className="thumbnail" width='440' height='440' src={img} alt={`Image of ${name}`} />
      <Link href={`${area}/${name}`}>
        <div className="thumbnail__over">
          <p className="thumbnail__title">{name}</p>
        </div>
      </Link>
    </div>
  )
}


