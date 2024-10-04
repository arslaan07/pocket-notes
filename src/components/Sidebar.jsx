import React from 'react'
import styles from './Sidebar.module.css'
import plus from '../images/plus.png'

const alphabet = "ABCCDEFGHIJKLMNOPQRSTUVWXYZ"

const Sidebar = () => {
    const a = [ "My", "Javascript grp", "HTML grp",
         "My Notes", "My Personal Grp", "Javascript grp", "HTML grp",
        "My Notes", "My Personal Grp", "Javascript grp", "HTML grp", 
        "My Notes", "My Personal Grp", "Javascript grp", "HTML grp",
        "My Notes", "My Personal Grp", "Javascript grp", "HTML grp"
    ]
    const getInitials = (grp) => {
      const initials =  grp.split(' ')
      let firstInital = initials[0][0]
      let secondInitial
      if(initials.length > 1) {
        secondInitial = initials[1][0].toUpperCase()
      } else {
        secondInitial = alphabet[Math.floor(Math.random() * 26)]
      }
      
      return firstInital + secondInitial
    }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Pocket Notes</div>
      <div className={styles.groupContainer}>
            {
                a.map((grp, i) => (
                    <div key={i} className={styles.groupCard}>
                         <div className={styles.circle}>
                            <span className={styles.initials}> {getInitials(grp)} </span>
                         </div>
                        {grp}
                    </div>
                ))
            }
      </div>
      <img className={styles.plus} src={plus} alt="" />
    </div>
  )
}

export default Sidebar
