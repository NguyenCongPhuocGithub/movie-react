import { useEffect } from 'react'
import useMovies from '../../hooks/useMovies'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './MovieList.module.css'

interface MovieListType {
    className ?: string;
    url : string;
}

const MovieList = ({ className, url }: MovieListType) => {

    const { movies, isLoading, fetchMovies } = useMovies();
    useEffect(() => {
        fetchMovies(url); // Sử dụng url truyền vào từ prop
        console.log('url', url)
      }, [url]);
    // console.log('movies', typeof movies);
    return (
        <div>
            <h1>Popular Movies</h1>
            {isLoading && <div>Loading.....</div>}
            <div className={className}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {movies.map(movie => (
                        <SwiperSlide key={movie.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                                <p>Vote Average: {movie.vote_average}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

export default MovieList

