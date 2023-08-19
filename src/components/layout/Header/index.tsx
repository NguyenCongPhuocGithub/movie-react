import React from 'react'
import styles from "./Header.module.css";
import HeaderLogo from '../../HeaderLogo';
import HeaderSeach from '../../HeaderSearch';
import HeaderUser from '../../HeaderUser';
import NavigationBar from '../../NavigationBar';
const Header = () => {
    console.log('header running');
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.header_wrapper}>
                <HeaderLogo/>
                <HeaderSeach/>
                <HeaderUser/>
            </div>
            <div className={styles.navbar_wrapper}>
              <NavigationBar/>
            </div>
        </div>
    </header>
  )
}

export default Header