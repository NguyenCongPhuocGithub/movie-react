import React from 'react'
import styles from './TitleMovies.module.css'

interface TitleMoviesType{
    label: string;
}

const TitleMovies = ({label}:TitleMoviesType) => {
  return (
    <div className={`${styles.heading}`}>
        <h3>{label}</h3>
    </div>
  )
}

export default TitleMovies