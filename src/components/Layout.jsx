import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
