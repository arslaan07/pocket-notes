import React from 'react'
import styles from './Modal.module.css'
const Modal = ({ children }) => {
  return (
    <>
    <div className={styles.container}>
      {children}
    </div>
    <div className={styles.background}> </div>
    </>
  )
}

export default Modal
