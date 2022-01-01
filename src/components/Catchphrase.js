import './Catchphrase.css'

import ReactGA from 'react-ga'

const Catchphrase = () => {
  const Clickhandler = () => {
    ReactGA.event({
      category: 'Button',
      action: 'click catchphrase button'
    })
  }
  return (
    <>
      <div className='catchphrase-container'>
        <h1 className='catchphrase-first tracking-in-contract '>
          Developpement Web et
        </h1>
        <h1 className='catchphrase-second tracking-in-contract '>
          Coaching web Marketing
        </h1>
        <h2 className='catchphrase-third tracking-in-contract '>
          Au service des TPE PME
        </h2>
        <h2 className='catchphrase-third tracking-in-contract '>
          et associations
        </h2>
      </div>
      <div className='contact-button'>
        <a href='#contact'>
          <button className='btn-grad' onClick={Clickhandler}>
            Me Contacter
          </button>
        </a>
      </div>
    </>
  )
}
export default Catchphrase
