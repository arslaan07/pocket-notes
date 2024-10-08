import React, { useEffect, useState } from 'react'
import styles from './ContentArea.module.css'
import saveDisable from '../images/saveDisable.png'
import saveEnable from '../images/saveEnable.png'
import backImg from '../images/back.png'
import useWindowWidth from '../hooks/useWindowWidth'
import { formatDateAndTime } from '../utils/formatDateAndTime'
import NoteCard from './NoteCard'
import { nanoid } from 'nanoid'
import GroupCard from './GroupCard'
import { useNavigate } from 'react-router-dom'

const ContentArea = ({selectedGroup, setSelectedGroup}) => {
  const windowWidth = useWindowWidth()
  const navigate = useNavigate()
  const showBackImg = windowWidth <= 468
  const [formData, setFormData] = useState({
    nId: '',
    gId: '',
    note: '',
    date: '',
    time: ''
  })
  const { date, time } = formatDateAndTime()
  const [allNotes, setAllNotes] = useState([])
  const [presentGroup, setPresentGroup] = useState(null)  // Use useState for presentGroup

  const handleChange = (e) => {
    setFormData({
      note: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.note.trim() === '') return

    const newNote = {
      nId: nanoid(10),
      gId: selectedGroup,
      note: formData.note,
      date,
      time
    }
    setAllNotes((prevNotes) => [
      ...prevNotes,
      newNote
    ])
    setFormData({
      nId: '',
      gId: '',
      note: '',
      date: '',
      time: ''
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('allNotes')) || []
    setAllNotes(storedNotes)

    const storedSelectedGroup = JSON.parse(localStorage.getItem('selectedGroup')) || ''
    setSelectedGroup(storedSelectedGroup)
  }, [])

  useEffect(() => {
    if (allNotes.length > 0) {
      localStorage.setItem('allNotes', JSON.stringify(allNotes))
    }
  }, [allNotes])

  useEffect(() => {
    if (selectedGroup) {
      localStorage.setItem('selectedGroup', JSON.stringify(selectedGroup))
    }

    const storedGroups = JSON.parse(localStorage.getItem('notesGroup')) || []
    const group = storedGroups.find((group) => group.id === selectedGroup)
    if (group) {
      setPresentGroup(group)  // Update presentGroup using setPresentGroup
    }
  }, [selectedGroup])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <button className={styles.backImg} onClick={() => {
          localStorage.removeItem('selectedGroup')
          setSelectedGroup('')
          navigate("/")
        }}>
          {showBackImg && <img src={backImg} alt="" />}
        </button>
        <div className={styles.groupContainer}>
          {presentGroup && (
            <GroupCard group={presentGroup} onClick={() => setSelectedGroup(presentGroup.id)} heading />
          )}
        </div>
      </h1>
      <div className={styles.notesContainer}>
        {allNotes
          .filter((note) => note.gId === selectedGroup)
          .map((note) => (
            <NoteCard note={note} key={note.nId} />
          ))}
      </div>
      <div>
        <form action="" className={styles.textareaContainer} onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={styles.textarea}
            value={formData.note}
            placeholder="Enter your text here..........."
          ></textarea>
          <button className={styles.saveButton} type="submit">
            <img src={formData.note ? saveEnable : saveDisable} alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContentArea
