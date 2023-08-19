import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

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

const MoviesDetailPage = () => {
  const params = useParams();
  console.log(params);
  const id = params.id ? parseInt(params.id) : 0;

  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  console.log('data',data);

  return (
    <div className="container">
      <h1>Movies Detail + Biến ID: {params.id}</h1>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}

export default MoviesDetailPage