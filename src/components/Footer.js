import './Footer.css'

import { useEffect, useState } from 'react'

import Modal from './Modal'
import Sphere from './assets/images/Sphere.png'

const Footer = () => {
  const [openModal, setOpenModal] = useState(false)
  const [id, setId] = useState('')

  const handleModalContent = async function (e) {
    setId(e.target.getAttribute('id'))
  }
  useEffect(() => {
    id ? setOpenModal(true) : setOpenModal(false), console.log(id)
  }, [id])

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
            id='cgu'
            onClick={e => {
              handleModalContent(e)
            }}
          >
            CGU
          </li>
          <li
            id='ml'
            onClick={e => {
              handleModalContent(e)
            }}
          >
            Mentions Légales
          </li>
          <li
            id='poli'
            onClick={e => {
              handleModalContent(e)
            }}
          >
            politique de protection des données à caractère personnel
          </li>
          <li
            id='cookie'
            onClick={e => {
              handleModalContent(e)
            }}
          >
            Politique de gestion des cookies
          </li>
        </ul>
        {openModal ? <Modal id={id} closeModal={setOpenModal} /> : null}
      </div>
      <div className='credit'>
        Crédit photo: voilier by Flo Dahm, setup by Pixabay , bureau by Josh
        Sorenson
      </div>
    </footer>
  )
}
export default Footer
