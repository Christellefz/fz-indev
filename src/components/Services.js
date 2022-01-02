import './Services.css'
import { FaDharmachakra } from '@react-icons/all-files/fa/FaDharmachakra'
import { FaDraftingCompass } from '@react-icons/all-files/fa/FaDraftingCompass'

import { Parallax } from 'react-parallax'
import responsive from './assets/images/responsive.webp'

const Services = () => {
  return (
    <div className='services-container'>
      <p className='first-comment'>
        &quot;La vie d&apos;une entreprise n&apos;est pas un long fleuve
        tranquille. En matière de site web et de stratégie digitale ma mission
        est de vous guider dans vos choix vers l&apos;atteinte de vos objectifs.
        Pour vous accompagner dans ce voyage, je mets mes compétences et mon
        savoir-faire au service de votre réussite. Votre succès sera le
        mien&quot;
      </p>
      <h1 className='services-main-title'>Services</h1>
      <section className='services-section'>
        <div className='services-section-1st'>
          <h2 className='service-subtitle'>
            <FaDharmachakra />
            Développement Web
            <FaDharmachakra />
          </h2>
          <article>
            <ul className='services-dev list'>
              <li className='list-item'>création sur mesure</li>
              <li className='list-item'>Responsive design</li>
              <li className='list-item'>Interface d&apos;administration</li>
              <li className='list-item'>Animations Dynamiques</li>
              <li className='list-item'>Integration web</li>
              <li className='list-item'>Fonctionalités</li>
            </ul>
          </article>
        </div>
        <div className='services-section-1st'>
          <h2 className='service-subtitle'>
            <FaDraftingCompass />
            Coaching Web Marketing
            <FaDraftingCompass />
          </h2>
          <article className='services-article'>
            <ul className='services-dev list'>
              <li className='list-item'>Référencement naturel</li>
              <li className='list-item'>Analyse de page de résultat</li>
              <li className='list-item'>Google Analitics</li>
              <li className='list-item'>Stratégie web</li>
              <li className='list-item'>Formation</li>
              <li className='list-item'>Audit</li>
            </ul>
          </article>
        </div>
      </section>

      <Parallax
        blur={{ min: -100, max: 100 }}
        bgImage={responsive}
        bgImageAlt="bureau avec deux écrans d'ordinateur"
        strength={800}
      >
        <div style={{ height: '25vh', width: '100vw' }} />
      </Parallax>
    </div>
  )
}
export default Services
