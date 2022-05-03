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
      <h1 className='Tarifs-title'>Liste des Prestations</h1>
      <p className='first-comment second-comment'>
        Avoir un site, des pages pros sur les réseaux, créer des campagnes de
        publicité en ligne est en soit une excellente idée et vous l&apos;avez
        compris puisque vous êtes ici! Ceci-dit des questions subsistent: Quels
        outils ou plateformes utiliser pour ma communication en ligne? Dois-je
        faire appel à un professionnel? Quel budget prévoir pour mon site
        internet? Combien de temps pour avoir mon site?
        <br />
        La réponse vous vous en doutez est: Cela dépend de vos objectifs et du
        temps dont vous disposez!
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
                    return <li key={object.length}>{object}</li>
                  })}
                </ul>
                <h3>Pour</h3>
                <p className='pour'>{offre.pour}</p>
                <h3>Taux journalier*: {offre.tarif}</h3>
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
          *Tous les prix sont annoncés HT. La totalité du site et des contenus
          (fichiers, code) deviennent votre propriété une fois l&apos;entièreté
          du règlement versé à l&apos;entreprise.** Réalisation avec des
          entreprises partenaires
        </h4>
      </section>
    </div>
  )
}
export default Tarifs
