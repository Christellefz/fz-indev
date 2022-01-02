import './Navbar.css'

import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'

import Logo from './assets/images/Logo.webp'
import { links } from '../data'
import { useState } from 'react'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const handleShowlinks = () => {
    setShowLinks(!showLinks)
  }
  const handleClick = e => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64
    })
  }
  return (
    <div className={`nav-container ${showLinks ? 'show-nav' : 'hidden-nav'} `}>
      <div className='nav-contact'>
        <span className='nav-contact-item'>Tel: 06 66 36 42 27</span>
        <span className='nav-contact-item'>Mail: contact@fzindev.fr</span>
      </div>
      <nav className={`navItems ${showLinks ? 'show-nav' : 'hidden-nav'} `}>
        <img className='logo' alt='logo de fz indev' src={Logo} />
        {links.map(link => {
          return (
            <a
              href={link.url}
              key={link.id}
              onClick={(handleClick, handleShowlinks)}
              className='link , slideInDown'
            >
              {link.text}
            </a>
          )
        })}
        <div className='social-Icons-block '>
          <a
            href='https://www.facebook.com/Christellefz'
            title='facebook fz-indev'
            target='blank'
            className='socialMediaIcon'
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href='https://www.instagram.com/christelle_lagawyte/?hl=fr'
            title='facebook fz-indev'
            target='blank'
            className='socialMediaIcon '
          >
            <FaInstagram size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/christelle-fernandez-1018a717b/?originalSubdomain=fr'
            title='facebook fz-indev'
            target='blank'
            className='socialMediaIcon '
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </nav>
      <button className='navbar-burger' onClick={handleShowlinks}>
        <span className='navbar-bar '></span>
      </button>
    </div>
  )
}
export default Navbar
