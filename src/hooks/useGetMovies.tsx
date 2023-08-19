import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
    id: number;
    title: string;
    original_title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
}

// interface GetMoviesType {
//   data: Data[];
//   error: string;
//   loading: boolean;
// }

export default function useGetMovies(url: string) {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
          },
        });
        setData(response.data.results);
        console.log(response.data.results, "get data");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}