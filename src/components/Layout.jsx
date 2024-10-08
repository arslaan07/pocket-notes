import React, { useState } from 'react'
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
  const addGroup = (id, name, color, initials) => {
    setNotesGroup((prevGroups) => [
      ...prevGroups,
      {id, name, color, initials}
    ])
  }
  return (
    <>
    <div className={styles.container}>
      {showSidebar && <Sidebar onOpen={onOpen} isOpen={isOpen} 
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
