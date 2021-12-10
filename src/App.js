import './App.css'

import About from './components/Tarifs'
import Catchphrase from './components/Catchphrase'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tarifs from './components/About'

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
    </div>
  )
}

export default App
