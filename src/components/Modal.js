import React from 'react'

const Modal = ({ id, closeModal }) => {
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
        <div className='modal-content'></div>
      </div>
    </div>
  )
}

export default Modal
