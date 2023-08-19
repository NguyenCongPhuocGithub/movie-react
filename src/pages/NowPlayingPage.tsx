import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import TitleMovies from '../components/TitleMovies';
import GetMoviesGrid from '../components/GetMoviesGrid';
import styles from './NowPlayingPage.module.css'

const NowPlayingPage = () => {
  const location = useLocation();
  const [params] = useSearchParams();

  const pages = params.get('page');
  const int_page = pages ? parseInt(pages) : 1;

  console.log(location);

  const [count, setCount] = useState(1);

  const handleUp = () => {
    setCount(count + 1);
  };

  const handleDown = () => {
    setCount(count - 1);
  };

  const paginatePage = useNavigate();

  useEffect(() => {
    paginatePage(`/nowplaying?page=${count}`);
  }, [count]);



  return (
    <section className={`nowplaying container`}>
      <TitleMovies label="Movies and Show" />
      <GetMoviesGrid
        url={`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${int_page}`}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-3"
      />
      {count === 1 ? (
        <div className={`container flex justify-center items-center`}>
          <button onClick={handleUp} className={styles.button_up}>Next Page</button>
        </div>
      ) : (
        <div className={`container flex justify-between items-center`}>
          <button onClick={handleDown} className={styles.button_down}>Previous Page</button>
          <button onClick={handleUp} className={styles.button_up}>Next Page</button>
        </div>
      )}
    </section>
  );
};

export default NowPlayingPage;