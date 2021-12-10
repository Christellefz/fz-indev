import './Tarifs.css'

import { DataOffre } from './assets/DataOffre'
import { Link } from 'react-router-dom'

const Tarifs = () => {
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
        <div>
          {DataOffre.map(offre => {
            return (
              <div className='basic' key={offre.title}>
                <h2>{offre.title}</h2>
                <h3>Objectif: </h3>
                <p>{offre.objectif}</p>
                <h3>Contenu: </h3>
                <p>{offre.contenu}</p>
                <h3>Tarif*: {offre.tarif}</h3>
                <Link to='/'>
                  <button className='btn-grad '>Me Contacter</button>
                </Link>
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
