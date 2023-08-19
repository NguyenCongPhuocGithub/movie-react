import React from 'react'
import styles from './HeaderLogo.module.css'

const HeaderLogo = () => {
  return (
    <div className={styles.logo}>
      <span>MOVIE</span>
      <span className={styles.vennie}>VENNIE</span>
      </div>
  )
}

export default HeaderLogo