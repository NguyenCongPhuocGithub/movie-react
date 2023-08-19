import React from 'react'
import GetMovies from '../GetMovies'
import TitleMovies from '../TitleMovies'
import { useState } from 'react'
import styles from './NextPage.module.css'

const NextPage = () => {
    const [show, setShow] = useState<boolean>(false)

    const handleClick = () => {
        setShow(!show)
    };
    return (
        <>
            {
                show && (
                    <>
                        <section className={`toprate container pt-10`}>
                            <TitleMovies label="Best List Movies" />
                            <GetMovies url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" />
                        </section>
                        <section className={`nowplaying container pt-10`}>
                            <TitleMovies label="Upcoming Movies" />
                            <GetMovies url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" />
                        </section>
                    </>
                )
            }
            <div className ={styles.next_page}>
                <button className={styles.next_btn} onClick={handleClick}>{!show ? "Next Page" : "Previous Page"}</button>
            </div>
            
        </>
    )
}

export default NextPage

