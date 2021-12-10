import './Services.css'

import { FaDharmachakra, FaDraftingCompass } from 'react-icons/fa'

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
            </ul>
          </article>
        </div>
      </section>
    </div>
  )
}
export default Services
