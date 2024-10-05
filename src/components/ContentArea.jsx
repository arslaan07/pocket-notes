import React from 'react'
import styles from './ContentArea.module.css'
import saveImg from '../images/save.png'

const notes = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut!"

]
const ContentArea = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Notes</h1>
      <div className={styles.notesContainer}>
        {
          notes.map((note, i) => (
            <div className={styles.noteCard} key={i}>
              {note}
              <div className={styles.date}>Date and Time</div>
            </div>
          ))
        }
      </div>
      <div className={styles.textareaContainer}>
        <textarea className={styles.textarea} name="" id=""
        placeholder='Enter your text here...........'></textarea>
        <img className={styles.saveImg} src={saveImg} alt="" />
      </div>
    </div>
  )
}

export default ContentArea
