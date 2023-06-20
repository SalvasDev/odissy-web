import { Poppins } from '@next/font/google'
import Index from './Index'


const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal']
})

export default function IndexBar() {

  const arrIndex = ['Start', '01', '02', '03', '04']
  var i = 0;
  return (

    <div className={`index__bar ${poppins.className}`}>
      <div className="index">
        {arrIndex.map(ind => {
          i = i + 1
          return (
            <Index
              key={i.toString()}
              ind={ind}
            />
          )
        })}
      </div>

      <div className="progress__bar"></div>

    </div>
  )
}



