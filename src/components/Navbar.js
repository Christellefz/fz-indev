import './Navbar.css'

import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

import Logo from './assets/images/Logo.png'
import { links } from '../data'

const Navbar = () => {
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
    <div className='nav-container'>
      <div className='nav-contact'>
        <span className='nav-contact-item'>Tel: 06 66 36 42 27</span>
        <span className='nav-contact-item'>Mail: contact@fzindev.fr</span>
      </div>
      <div className='nav-core'>
        <img className='logo' alt='logo de fz indev' src={Logo} />

        <div className='navAndSocial'>
          <nav className='navItems'>
            {links.map(link => {
              return (
                <a
                  href={link.url}
                  key={link.id}
                  onClick={handleClick}
                  className='link'
                >
                  {link.text}
                </a>
              )
            })}
          </nav>
          <div className='social-Icons-block'>
            <a
              href='https://www.facebook.com/christelle.fernandez.73/'
              title='facebook fz-indev'
              target='blank'
              className='socialMediaIcon'
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href='https://www.facebook.com/christelle.fernandez.73/'
              title='facebook fz-indev'
              target='blank'
              className='socialMediaIcon'
            >
              <FaInstagram size={24} />
            </a>
            <a
              href='https://www.facebook.com/christelle.fernandez.73/'
              title='facebook fz-indev'
              target='blank'
              className='socialMediaIcon'
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
