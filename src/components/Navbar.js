import './Navbar.css'

import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import Logo from './assets/images/Logo.png'

const Navbar = () => {
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
            <ul className='navlist'>
              <Link exact to='/' className='link'>
                <li className='navli'>Accueil</li>
              </Link>
              <Link to='/about' className='link'>
                <li className='navli'>A propos</li>
              </Link>
              <Link to='/ProBackground' className='link'>
                <li className='navli'>Parcours</li>
              </Link>
              <Link to='/skills' className='link'>
                <li className='navli'>Compétences</li>
              </Link>
              <Link to='/contact' className='link'>
                <li className='navli'>Form/Map</li>
              </Link>
              <Link to='/don' className='link'>
                <li className='navli'>Payment Form</li>
              </Link>
            </ul>
          </nav>
          <div className='social-Icons-block'>
            <a
              href='https://www.facebook.com/christelle.fernandez.73/'
              title='facebook fz-indev'
              target='blank'
              className='socialMediaIcon'
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href='https://www.facebook.com/christelle.fernandez.73/'
              title='facebook fz-indev'
              target='blank'
              className='socialMediaIcon'
            >
              <FaInstagram size={28} />
            </a>
            <a
              href='https://www.facebook.com/christelle.fernandez.73/'
              title='facebook fz-indev'
              target='blank'
              className='socialMediaIcon'
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
