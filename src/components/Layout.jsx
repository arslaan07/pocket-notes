import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './Layout.module.css'
import AddGroup from './AddGroup'
import useWindowWidth from '../hooks/useWindowWidth'
const Layout = ({onOpen, onClose, isOpen, selectedGroup, setSelectedGroup}) => {
  const location = useLocation()
  const windowWidth = useWindowWidth()
  const showSidebar = !(location.pathname === `/group/id=${selectedGroup}` && windowWidth <= 468)
  const [notesGroup, setNotesGroup] = useState([])
  const groupContainerRef = useRef()
  const [addGrp, setAddGrp] = useState(false)

  const setOfNames = new Set()
    for(let i of notesGroup) {
      setOfNames.add(i.name)
    }
    console.log(setOfNames)
  const addGroup = (id, name, color, initials) => {
    if(setOfNames.has(name)) {
      return 'Group Name already exists'
    } 
    onClose()
    setAddGrp(true)
    setNotesGroup((prevGroups) => [
      ...prevGroups,
      {id, name, color, initials}
    ])
    // open notes page for the created group
    setSelectedGroup(id)
    return ''
  }

  // move the scrollbar to the newly added group
  useEffect(() => {
    if(addGrp) {
      if(groupContainerRef.current) {
        groupContainerRef.current.scrollTop = groupContainerRef.current.scrollHeight
      }
    }
  }, [addGrp])
 
  return (
    <>
    <div className={styles.container}>
      {showSidebar && <Sidebar onOpen={onOpen} isOpen={isOpen} ref={groupContainerRef}
      notesGroup={notesGroup} setNotesGroup={setNotesGroup} 
      selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}/>}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
    <AddGroup isOpen={isOpen} onClose={onClose} addGroup={addGroup}/>
    </>
  )
}

export default Layout
