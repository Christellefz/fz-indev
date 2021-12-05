import './App.css'

import Catchphrase from './components/Catchphrase'
import Navbar from './components/Navbar'
import Services from './components/Services'

const App = () => {
  return (
    <div className='App'>
      <div className='landingView'>
        <Navbar />
        <Catchphrase />
      </div>
      <Services />
    </div>
  )
}

export default App
