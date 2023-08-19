import React from 'react';
import styles from './HeaderSearch.module.css';
import { FiSearch } from 'react-icons/fi';


const HeaderSeach = () => {
    const [movie, setMovie] = React.useState({
        moviename: ''
    });
    return (
        <div>
            <div className={styles.searchbox}>
                <input className={styles.inputsearch} onChange={(e) => {
                    console.log(e.target.value);
                    const newMovie = { ...movie, moviename: e.target.value }
                    setMovie(newMovie);
                }} type="text" placeholder="Search Moive" />
                <div className={styles.iconsearch}>
                    <FiSearch />
                </div>
            </div>
        </div>
    )
}

export default HeaderSeach