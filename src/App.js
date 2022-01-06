import './App.css'

import Catchphrase from './components/Catchphrase'
import Navbar from './components/Navbar'
import ReactGA from 'react-ga'
import loadable from '@loadable/component'
import { useEffect } from 'react'

const About = loadable(() => import('./components/About'))
const Contact = loadable(() => import('./components/Contact'))
const Footer = loadable(() => import('./components/Footer'))
const Services = loadable(() => import('./components/Services'))
const Tarifs = loadable(() => import('./components/Tarifs'))
const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-216078235-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className='App' id='home'>
      <Navbar />
      <div className='landingView'>
        <Catchphrase />
      </div>
      <section id='services'>
        <Services />
      </section>
      <section id='tarifs'>
        <Tarifs />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <section id='contact'>
        <Footer />
      </section>
    </div>
  )
}

export default App
