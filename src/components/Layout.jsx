import React from 'react'
import Sidebar from './Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './Layout.module.css'
import AddGroup from './AddGroup'
import useWindowWidth from '../hooks/useWindowWidth'
const Layout = () => {
  const location = useLocation()
  const windowWidth = useWindowWidth()

  const showSidebar = !(location.pathname === '/groupname' && windowWidth <= 468)
  return (
    <>
    <div className={styles.container}>
      {showSidebar && <Sidebar />}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
    <AddGroup />
    </>
  )
}

export default Layout
