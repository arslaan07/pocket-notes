import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import plus from '../images/plus.png'
import AddGroup from './AddGroup'

const alphabet = "ABCCDEFGHIJKLMNOPQRSTUVWXYZ"

const Sidebar = ({ onOpen, notesGroup }) => {
  console.log(notesGroup)

    const a = [ "My", "Javascript grp", "HTML grp",
         "My Notes", "My Personal Grp", "Javascript grp", "HTML grp",
        "My Notes", "My Personal Grp", "Javascript grp", "HTML grp", 
        "My Notes", "My Personal Grp", "Javascript grp", "HTML grp",
        "My Notes", "My Personal Grp", "Javascript grp", "HTML grp"
    ]
    const getInitials = (name) => {
      const initials =  name.split(' ')
      let firstInital = initials[0][0].toUpperCase()
      let secondInitial
      if(initials.length > 1) {
        secondInitial = initials[1][0].toUpperCase()
      } else {
        secondInitial = alphabet[Math.floor(Math.random() * 26)]
      }
      
      return firstInital + secondInitial
    }
  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>Pocket Notes</div>
      <div className={styles.groupContainer}>
            {
                notesGroup.map((group, i) => (
                    <div key={i} className={styles.groupCard}>
                         <div style={{
                              background: group.color
                            }}
                             className={styles.circle}>
                            <span className={styles.initials}> {getInitials(group.name)} </span>
                         </div>
                        {group.name}
                    </div>
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
