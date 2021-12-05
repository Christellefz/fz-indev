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
            <Link exact to='/' className='link'>
              <img className='logo' alt='logo de fz indev' src={Logo} />
            </Link>
        <div className='navAndSocial'>
          <nav className='navItems'>
            <ul className='navlist'>
              <Link exact to='/' className='link'>
                <li className='navli'>Accueil</li>
              </Link>
              <Link to='/' className='link'>
                <li className='navli'>Services</li>
              </Link>
              <Link to='/tarifs' className='link'>
                <li className='navli'>Tarifs</li>
              </Link>
              <Link to='/about' className='link'>
                <li className='navli'>A propos</li>
              </Link>
              <Link to='/contact' className='link'>
                <li className='navli'>Contact</li>
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
