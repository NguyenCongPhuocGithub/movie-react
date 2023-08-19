import React from 'react'
import FooterText from '../../FooterText'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <FooterText label="MovieVennie" />
      </div>
    </footer>
  )
}

export default Footer