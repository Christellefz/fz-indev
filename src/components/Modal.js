import './Modal.css'

import { DataLegal } from './assets/DataLegal'
import React from 'react'
import { useEffect } from 'react'

const Modal = ({ id, closeModal }) => {
  useEffect(() => {
    console.log(id), [id]
  })

  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <button
          type='button'
          className='close-butt'
          onClick={() => closeModal(false)}
        >
          X
        </button>
        <div className='modal-content'>
          {/* {id == DataLegal.id ? <p key='id'>{DataLegal.content}</p> : null}{' '}
           */}
          {DataLegal.filter(data => data.id === id).map(contenu => {
            return <p key={DataLegal.id}>{contenu.content}</p>
          })}
        </div>
      </div>
    </div>
  )
}

export default Modal
