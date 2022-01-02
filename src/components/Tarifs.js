import './Tarifs.css'

import { DataOffre } from './assets/DataOffre'
import { GiOnTarget } from '@react-icons/all-files/gi/GiOnTarget'
import ReactGA from 'react-ga'

const Tarifs = () => {
  const Clickhandler = () => {
    ReactGA.event({
      category: 'Button',
      action: 'click catchphrase button'
    })
  }

  return (
    <div className='Tarifs-container'>
      <h1 className='Tarifs-title'>Liste des offres</h1>
      <p className='first-comment second-comment'>
        Avoir un site est en soit une excellente idée et vous l&apos;avez
        compris puisque vous êtes ici! Ceci-dit des questions subsistent: Quel
        outil ou plateforme utiliser pour mon site? Dois-je faire appel à un
        développeur web? Quel budget prévoire pour mon site internet? Combien de
        temps pour avoir mon site?
        <br />
        La réponse vous vous en doutez est: Cela dépend de vos objectifs!
      </p>
      <section className='section-offres'>
        <div className='basic-container'>
          {DataOffre.map(offre => {
            return (
              <div className='basic' key={offre.title}>
                <h2>{offre.title}</h2>
                <h3>
                  Objectif: <GiOnTarget />
                </h3>
                <p className='objectif'>
                  <strong>{offre.objectif}</strong>
                </p>
                <h3>Contenu: </h3>
                <ul key={offre.title} className='tarif-description'>
                  {offre.contenu.map(object => {
                    return <li key={object[1]}>{object}</li>
                  })}
                </ul>
                <h3>Pour</h3>
                <p className='pour'>{offre.pour}</p>
                <h3>Tarif*: {offre.tarif}</h3>
                <a href='#contact'>
                  <button className='btn-grad ' onClick={Clickhandler}>
                    Me Contacter
                  </button>
                </a>
              </div>
            )
          })}
        </div>
        <h4>
          Tous nos prix sont annoncés HT. La totalité du site (fichiers, code)
          devient votre propriété une fois la totalité du règlement versé à
          l&apos;entreprise.
        </h4>
      </section>
    </div>
  )
}
export default Tarifs
