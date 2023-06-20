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
  }, []);

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

  const imageUrl = found?.pics[0]
  var i = 1
  return (
    <>
      <BasicLayout project={project} platform={platform} pageDescription={found?.description} imageUrl={imageUrl} currentUrl={currentUrl}>
        <div className="detail__container center">
          <section className="detail__info center">
            <div className="detail__data animate__animated animate__fadeInLeft">
              <h2 className="detail__title">{found?.name}</h2>
              <div className="detail__vertical-line"></div>
              <h3 className="detail__area">{(found?.area || '').charAt(0).toUpperCase() + (found?.area || '').slice(1)}</h3>
              <h3 className="detail__element">Diseño: {found?.designed}</h3>
              {found?.developed && <h3 className="detail__element">Desarrollo: {found?.developed}</h3>}
              <h4 className="detail__share">Compartir en: <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target='_blank' rel='noreferrer'>FB</a></h4>
            </div>
            <div className="description animate__animated animate__fadeInRight" dangerouslySetInnerHTML={htmlContent} />
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


