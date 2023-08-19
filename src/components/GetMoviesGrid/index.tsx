import React from 'react'
import useGetMovies from '../../hooks/useGetMovies'
import styles from './GetMoviesGrid.module.css'
import { Link } from "react-router-dom"
import { MdNavigateNext } from 'react-icons/md'

interface GetMoviesGridType {
    className?: string;
    url: string;
}

const GetMoviesGrid = ({ className, url }: GetMoviesGridType) => {
    const { data, loading, error } = useGetMovies(url);
    return (
        <div>
            {loading ? <div>Loading.....</div> : error}
            <div className={className}>
                {data.map(movie => (
                    <Link key={movie.id} to={`/moviesdetail/${movie.id}`}>
                        <div className={styles.movie_box}>
                            <img className={styles.movie_box_img} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title} />
                            <div className={styles.box_text}>
                                <h2>{movie.title}</h2>
                                <p>Vote Average: {movie.vote_average}</p>
                                <span className="movie-type">action</span>
                                <a href="#" className={`${styles.watch_btn} ${styles.play_btn}`}>
                                    <MdNavigateNext />
                                </a>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>

    )
}

export default GetMoviesGrid