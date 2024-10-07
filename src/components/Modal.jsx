import React from 'react'
import styles from './Modal.module.css'
const Modal = ({ children, isOpen, onClose }) => {
  return (
    <>
    {
       isOpen && 
       <>
       <div className={styles.container}>
         {children}
       </div>
       <div onClick={onClose} className={styles.background}> </div>
       </>
    }
    </>
  )
}

export default Modal
