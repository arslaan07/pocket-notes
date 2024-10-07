import React, { useState } from 'react'
import styles from './ContentArea.module.css'
import saveDisable from '../images/saveDisable.png'
import saveEnable from '../images/saveEnable.png'
import backImg from '../images/back.png'
import useWindowWidth from '../hooks/useWindowWidth'

const notes = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, recusandae. Saepe incidunt fugiat quisquam assumenda cumque ipsam voluptate nulla ut!"

]
    let date = new Date()
    let splitDate = date.toString().split(' ')
    let formattedDate = splitDate[2][0] === '0' ? splitDate[2][1] : splitDate[2]
    formattedDate += " " + splitDate[1] + " " + splitDate[3]
    let time = new Date();
    let formattedTime =  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
const ContentArea = () => {
  const windowWidth = useWindowWidth()
  const showBackImg = windowWidth <= 468
  const [formData, setFormData] = useState({
    note: '',
    date: '',
    time: ''
  })
  const [allNotes, setAllNotes] = useState([])
  const handleChange = (e) => {
    setFormData({
      note: e.target.value,
      date: formattedDate,
      time: formattedTime
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(formData.note.trim() === '') return 
    console.log("note submitted: ", formData)
    setAllNotes((prevNotes) => ([
      ...prevNotes,
      formData
    ]))
    console.log(allNotes)
    setFormData({
      note: '',
      date: '',
      time: ''
    })
    console.log(allNotes)
    
      }
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleSubmit(e)
    }
  }
    
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {showBackImg && <img className={styles.backImg} src={backImg} alt="" />}
        My Notes</h1>
      <div className={styles.notesContainer}>
        {
          allNotes.map((note, i) => (
            <div className={styles.noteCard} key={i}>
              {note.note}
              <div className={styles.date}>
                <div style={{marginRight: '30px'}}> {note.date} </div>
                <ul><li> {note.time}</li></ul>                
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <form action="" className={styles.textareaContainer} onSubmit={handleSubmit}>
          <textarea onChange={handleChange}  onKeyDown={handleKeyDown}
           className={styles.textarea} name="" id=""
          value={formData.note}
          placeholder='Enter your text here...........'></textarea>
          <button className={styles.saveButton} type='submit'> 
            <img src={formData.note? saveEnable : saveDisable} alt="" /> </button>
        </form>
      </div>
    </div>
  )
}

export default ContentArea
