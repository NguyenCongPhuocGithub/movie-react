import React from 'react'
import useCount from '../../hooks/useCount'
import styles from './Paginates.module.css'

const Paginates = () => {
    const {actionUp, actionDown} = useCount();
  return (
    <div className={`container flex justify-between items-center`}>
        <button onClick={actionDown} className={styles.button_down} >Previous Page</button>
        <button onClick={actionUp} className={styles.button_up}>Next Page</button>
    </div>
  )
}

export default Paginates

