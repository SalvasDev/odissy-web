import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BasicLayout from '../../layouts/BasicLayout/BasicLayout'
import { dbProjects } from '../../data/dbProjects'
import ButtonDetail from '../../components/buttonDetail'


export default function Project() {

  const router = useRouter()
  const { project, platform } = router.query

  const currentUrl = `https://www.byodisy.com${router.asPath}`;


  const [showVerticalBtnDetail, setShowVerticalBtnDetail] = useState(false)

  const found = dbProjects.find(element => (element?.name === project && element?.area === platform));
  var htmlContent = { __html: found?.description };

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url !== '/') {
        window.history.pushState({}, null, '/');
        router.replace('/')
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const distanceInPercentage = (distanceFromTop / totalHeight) * 100;

      if (distanceInPercentage >= 5) { // Cambia este valor para el porcentaje que desees
        setShowVerticalBtnDetail(true)
      } else {
        setShowVerticalBtnDetail(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const baseUrl = 'https://www.byodisy.com'
  const imageUrl = baseUrl + found?.pics[0]
  var i = 1
  return (
    <>
      <BasicLayout title={found?.area + ' ' + found?.name} project={project} platform={platform} pageDescription={found?.description} imageUrl={imageUrl} currentUrl={currentUrl}>
        <div className="detail__container center">
          <section className="detail__info center">
            <div className="detail__data animate__animated animate__fadeInLeft">
              <h1 className="detail__title">{found?.name}</h1>
              <div className="detail__vertical-line"></div>
              <h2 className="detail__area">{(found?.area || '').charAt(0).toUpperCase() + (found?.area || '').slice(1)}</h2>
              <h2 className="detail__element">Diseño: {found?.designed}</h2>
              {found?.developed && <h3 className="detail__element">Desarrollo: {found?.developed}</h3>}
              <h3 className="detail__share">Compartir en: <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target='_blank' rel='noreferrer'>FB</a></h3>
            </div>
            <div>
              <div className="description animate__animated animate__fadeInRight" dangerouslySetInnerHTML={htmlContent} />
              <div className="projects__labels">
                {/* <a href={found?.code} target="_blank" rel="noopener noreferrer"><button className="projects__btn">Código</button></a> */}
                <a href={found?.demo} target="_blank" rel="noopener noreferrer"><button className="projects__btn">Demo</button></a>
              </div>
            </div>
          </section>

          <section className="detail__gallery center">
            {
              (found?.pics || []).map(img => {
                i = i + 1
                return (
                  <div className="detail__image center animate__animated animate__fadeInUp" key={i.toString()}>
                    <Image className="detail__pic center" width='1920' height='1280' src={img} priority alt='Imágenes del proyecto' />
                  </div>
                )
              })
            }
          </section>
          {
            showVerticalBtnDetail && <ButtonDetail smart__class='vertical__arrowbtn-detail' />
          }
        </div>
      </BasicLayout>
    </>
  )
}


