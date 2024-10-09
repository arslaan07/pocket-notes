import React from 'react'
import styles from './Home.module.css'
import homeImg from '../assets/images/home.png'
import lockImg from '../assets/images/lock.png'
const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.img}>
            <img src={homeImg} alt="" />
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>Pocket Notes</h1>
            <p className={styles.para}>Send and receive messages without keeping your phone online. <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className={styles.encrypt}>
            <img src={lockImg} alt="" />
            <span>end-to-end encrypted</span>
        </div>
    </div>
  )
}

export default Home
