import './Catchphrase.css'

import { Link } from 'react-router-dom'

const Catchphrase = () => {
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
        <Link to='/'>
          <button className='btn-grad'>Me Contacter</button>
        </Link>
      </div>
    </>
  )
}
export default Catchphrase
