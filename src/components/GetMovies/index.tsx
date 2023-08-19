import useGetMovies from "../../hooks/useGetMovies";
import { MdNavigateNext } from 'react-icons/md'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './GetMovies.module.css'

interface GetMoviesType {
    className?: string;
    url: string;
}

const GetMovies = ({ className, url }: GetMoviesType) => {

    const { data, loading, error } = useGetMovies(url);
    // useEffect(() => {
    //     fetchMovies(url); // Sử dụng url truyền vào từ prop
    //     console.log('url', url)
    //   }, [url]);
    // console.log('movies', typeof movies);
    return (
        <div>
            {loading ? <div>Loading.....</div> : error}
            <div className={className}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    // pagination={{ clickable: true }}
                    // spaceBetween={20}
                    // slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        // Thiết lập số lượng slide trên mỗi breakpoint
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                >
                    {data.map(movie => (
                        <SwiperSlide key={movie.id}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

export default GetMovies
