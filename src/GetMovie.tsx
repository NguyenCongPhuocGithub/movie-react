import React, { useState, useEffect } from 'react';
import axios from 'axios';
interface dataType {
  id: number;
  title: string;
}
const GetMovie = () => {
  const [movies, setMovies] = useState<dataType[]>([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8',
        },
      })
      .then((response) => {
        console.log('GetProfile', response);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Now Playing Movies</h1>
      {movies ? (
        <div>
          {movies.map((i) => (
            <div key={i.id}>{i.title}</div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default GetMovie;