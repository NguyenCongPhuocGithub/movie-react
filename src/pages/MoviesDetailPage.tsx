import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import useGetMovies from '../hooks/useGetMovies';

interface Data {
  id: number;
  profile_path: string;
  name: string;
  popularity: number;
  cast_id: number;
  character: string;
  credit_id: string;
  known_for_department: string;
}

interface MoviesDetailPageType {
  url?: string;
}

const MoviesDetailPage = ({ url }: MoviesDetailPageType) => {
  const params = useParams();
  console.log(params);
  const id = params.id ? parseInt(params.id) : 0;

  const [dataCredit, setData] = useState<Data[]>([]);
  const [errorCredit, setErrorCredit] = useState<string>("");
  const [loadingCredit, setLoadingCredit] = useState<boolean>(false);

  // const { data, loading, error } = useGetMovies(url);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingCredit(true);
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
          },
        });
        setData(response.data.cast);
        console.log(response.data.cast, "get data");
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingCredit(false);
      }
    };
    fetchData();
  }, [id]);
  
  console.log('dataCredit', dataCredit);
  return (
    <div className="container">
      <h1>Movies Detail + Biến ID: {params.id}</h1>
      {dataCredit.map((item) => (
        <>
          <div key={item.id}>
            <p >{item.name}</p>
            <div>
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.profile_path}`} alt={item.name} />
            </div>
            <p>{`id credit ${item.id}`}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default MoviesDetailPage