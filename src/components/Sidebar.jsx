import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import plus from '../images/plus.png'
import AddGroup from './AddGroup'
import GroupCard from './GroupCard'

const Sidebar = ({ onOpen, notesGroup, setNotesGroup, selectedGroup, setSelectedGroup }) => {
  console.log(selectedGroup)
  useEffect(() => {
    const group = JSON.parse(localStorage.getItem('notesGroup')) || []
    setNotesGroup(group)
  }, [])
  useEffect(() => {
    if(notesGroup.length > 0) {
      localStorage.setItem('notesGroup', JSON.stringify(notesGroup))
    }
  }, [notesGroup])
  useEffect(() => {
    let storedSelectedGroup = JSON.parse(localStorage.getItem('selectedGroup')) || ''
    if(storedSelectedGroup) {
      setSelectedGroup(storedSelectedGroup)
    }
  }, [])
  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>Pocket Notes</div>
      <div className={styles.groupContainer}>
            {
               notesGroup.length > 0 && notesGroup.map((group) => (
                    <GroupCard key={group.id} group={group}
                     onClick={() => {setSelectedGroup(group.id)}}
                     selectedGroup={selectedGroup}/>
                ))
            }
      </div>
      <button 
       onClick={onOpen} className={styles.plus}>
        <img className={styles.plusImg} src={plus} alt="" />
      </button>
      
    </div>
    {/* <AddGroup isOpen={isOpen} /> */}
    </>
  )
}

export default Sidebar
