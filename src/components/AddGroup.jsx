import React from 'react'
import Modal from './Modal'
import styles from './AddGroup.module.css'
const AddGroup = () => {
  return (
    <div>
      <Modal>
        <form action="" className={styles.form}>
            <h1 className={styles.heading}>Create New group</h1>
            <div className={styles.nameContainer}>
                <label htmlFor="name" className={styles.name}>Group Name</label>
                <input type="text" placeholder='Enter group name' className={styles.groupName}
                 name='name' id='name' />
            </div>
            <div className={styles.colorContainer}>
                <label htmlFor="" className={styles.color}>Choose color</label>
                <div>
                <ul className={styles.list}>
                    <li className={styles.first}></li>
                    <li className={styles.second}></li>
                    <li className={styles.third}></li>
                    <li className={styles.fourth}></li>
                    <li className={styles.fifth}></li>
                    <li className={styles.sixth}></li>
                </ul>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <input type="submit" value="Create" className={styles.button} />
            </div>
            
        </form>
      </Modal>
    </div>
  )
}

export default AddGroup
