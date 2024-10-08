import React, { useState } from 'react'
import Modal from './Modal'
import styles from './AddGroup.module.css'
import Sidebar from './Sidebar'
import { nanoid } from "nanoid"

const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]
const AddGroup = ({ isOpen, onClose, addGroup }) => {
  const [selectedBullet, setSelectedBullet] = useState({
    index: null,
    color: ""
  })
  const [name, setName] = useState('')
  const [errors, setErrors] = useState({})
  const handleBullet = (i) => {
    setSelectedBullet({
      index: i,
      color: colors[i]
    })
    console.log(selectedBullet)
  }
  const handleClick = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let errors = {}
    if(name.trim() === '') {
      errors.name = 'Group Name is required'
    }
    if(selectedBullet.index === null) {
      errors.color = 'Color is required'
    }
    setErrors(errors)
    if(Object.keys(errors).length > 0) return 
    console.log(`form submitted. groupname: ${name}, color: ${selectedBullet.color}}`);
    addGroup(nanoid(10), name, selectedBullet.color)
    setName('')
    setSelectedBullet({
      index: null,
      color: ""
    })
    onClose()
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.heading}>Create New group</h1>
            <div className={styles.nameContainer}>
                <label htmlFor="name" className={styles.name}>Group Name</label>
                <input onChange={handleClick} type="text" value={name}
                placeholder='Enter group name' className={styles.groupName}
                 name='name' id='name' />
            </div>
            <span className={styles.error}>{errors.name}</span>
            <div className={styles.colorContainer}>
                <label htmlFor="" className={styles.color}>Choose color</label>
                <div>
                <ul
                 className={styles.list}>
                    <li
                    onClick={() => handleBullet(0)}
                    className={`${styles.first} ${selectedBullet.index === 0? styles.selected : ''} `}></li>
                    <li 
                    onClick={() => handleBullet(1)}
                    className={`${styles.second} ${selectedBullet.index === 1? styles.selected : ''} `}></li>
                    <li onClick={() => handleBullet(2)}
                    className={`${styles.third} ${selectedBullet.index === 2? styles.selected : ''} `}></li>
                    <li onClick={() => handleBullet(3)}
                    className={`${styles.fourth} ${selectedBullet.index === 3? styles.selected : ''} `}></li>
                    <li onClick={() => handleBullet(4)}
                    className={`${styles.fifth} ${selectedBullet.index === 4? styles.selected : ''} `}></li>
                    <li onClick={() => handleBullet(5)}
                    className={`${styles.sixth} ${selectedBullet.index === 5? styles.selected : ''} `}></li>
                </ul>
                </div>
            </div>
            <span className={styles.error}>{errors.color}</span>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.button} > Create </button>
            </div>
            
        </form>
      </Modal>
    </div>
    
  )
}

export default AddGroup
