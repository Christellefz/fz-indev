import './App.css'

import About from './components/About'
import Catchphrase from './components/Catchphrase'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tarifs from './components/Tarifs'

const App = () => {
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
