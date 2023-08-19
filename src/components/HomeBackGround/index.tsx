import React from 'react'
import styles from './HomeBackGround.module.css'
import {MdNavigateNext} from 'react-icons/md'
type ImgHomeType = {
    img : string;
}

const HomeBackGround = ({img}: ImgHomeType ) => {
  return (
    <div className={`${styles.home}`}>
      <div >
          <img src={img} alt="home-img" className={`${styles.home_img}`}/>
      </div>
      <div className = {`${styles.home_text}`}>
          <h1>Hitman's Wife's <br/> Bodyguard</h1>
          <p>Releasing 23 july</p>
          <div className={styles.watch_btn}>
            <a href="#">
              <MdNavigateNext/>
              <span>Watch the trailler</span>
            </a>
          </div>
      </div>
    </div>
  )
}

export default HomeBackGround