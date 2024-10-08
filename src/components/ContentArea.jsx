import React, { useEffect, useState } from 'react'
import styles from './ContentArea.module.css'
import saveDisable from '../images/saveDisable.png'
import saveEnable from '../images/saveEnable.png'
import backImg from '../images/back.png'
import useWindowWidth from '../hooks/useWindowWidth'
import { formatDateAndTime } from '../utils/formatDateAndTime'
import NoteCard from './NoteCard'
import { nanoid } from 'nanoid'
 
const ContentArea = ({selectedGroup, setSelectedGroup}) => {
  console.log(selectedGroup)
  const windowWidth = useWindowWidth()
  const showBackImg = windowWidth <= 468
  const [formData, setFormData] = useState({
    nId: '',
    gId: '',
    note: '',
    date: '',
    time: ''
  })
  const  {date, time } = formatDateAndTime()
  const [allNotes, setAllNotes] = useState([])
  const handleChange = (e) => {
    setFormData({
      note: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(formData.note.trim() === '') return 
    console.log("note submitted: ", formData)
    const newNote = {
      nId: nanoid(10),
      gId: selectedGroup,
      note: formData.note,
      date,
      time
    }
    setAllNotes((prevNotes) => ([
      ...prevNotes,
      newNote
    ]))
    console.log(allNotes)
    setFormData({
      nId: '',
      gId: '',
      note: '',
      date: '',
      time: ''
    })
    
      }
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      handleSubmit(e)
    }
  }
  useEffect(() => {
    let storedNotes = JSON.parse(localStorage.getItem('allNotes')) || []
    if(storedNotes) {
      setAllNotes(storedNotes)
    }
    let storedSelectedGroup = JSON.parse(localStorage.getItem('selectedGroup')) || ''
    if(storedSelectedGroup) {
      setSelectedGroup(storedSelectedGroup)
    }
  }, [])
  useEffect(() => {
    if(allNotes.length > 0) {
      localStorage.setItem('allNotes', JSON.stringify(allNotes))
    }
  }, [allNotes])
  useEffect(() => {
    if(selectedGroup) {
      localStorage.setItem('selectedGroup', JSON.stringify(selectedGroup))
    }
  }, [selectedGroup])
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {showBackImg && <img className={styles.backImg} src={backImg} alt="" />}
        My Notes</h1>
      <div className={styles.notesContainer}>
        {
          allNotes.filter((note) => note.gId === selectedGroup)
          .map((note) => (
            <NoteCard note={note} key={note.nId}/>
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
