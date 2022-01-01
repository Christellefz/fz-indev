import './Footer.css'

import Modal from './Modal'
import Sphere from './assets/images/Sphere.png'
import { useState } from 'react'

const Footer = () => {
  const [openModal, setOpenModal] = useState(false)
  const [id, setId] = useState('')
  const handleModalContent = e => {
    e.preventDefault()
    setId(e.target.id)
    console.log(id)
  }
  return (
    <footer className='footer-container'>
      <div className='legal'>
        <img
          className=' footer-logo rotate-center'
          alt=' sphere du logo fz indev'
          src={Sphere}
        />
        <ul className='footer-link'>
          <li
            id='cgv'
            onClick={() => {
              setOpenModal(true)
              handleModalContent
            }}
          >
            CGV
          </li>
          <li id='cgu' onClick={() => setOpenModal(true)}>
            CGU
          </li>
          <li id='ml' onClick={() => setOpenModal(true)}>
            Mentions Légales
          </li>
          <li id='poli' onClick={() => setOpenModal(true)}>
            politique de protection des données à caractère personnel
          </li>
          <li id='cookie' onClick={() => setOpenModal(true)}>
            Politique de gestion des cookies
          </li>
        </ul>
        {openModal && <Modal id={id} closeModal={setOpenModal} />}
      </div>
      <div className='credit'>
        Crédit photo: voilier by Flo Dahm, setup by Pixabay , bureau by Josh
        Sorenson
      </div>
    </footer>
  )
}
export default Footer
