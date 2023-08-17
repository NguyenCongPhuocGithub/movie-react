// import { create } from 'zustand';
// import axios from 'axios';

// // const apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

// interface Movie {
//     id: number;
//     title: string;
//     original_title: string;
//     poster_path: string;
//     overview: string;
//     popularity: number;
//     vote_average : number;
//     vote_count : number;
//     // category: {
//     //     id: number;
//     //     name: string;
//     //     image: string;
//     // };
// }

// interface MoviesType {
//     movies: Movie[];
//     isLoading: boolean;
//     error: string;
//     fetchMovies: () => void,
//     url: string;
//     setUrl: (url: string) => void;
//     // filterMovies: (id: number) => void
// }


// const useMovies = create<MoviesType>((set) => (
//     {
//         movies: [],
//         isLoading: false,
//         error: '',
//         url: '',

//         fetchMovies: async () => {
//             try {
//                 set({ isLoading: true, error: '' });
//                 const response = await axios.get(`${set.url}`,{
//                     headers: {
//                       Authorization:
//                       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8',
//                     },
//                   });
//                 set({ movies: response.data.results, isLoading: false });
//             }
//             catch (error) {
//                 console.error('Error fetching movies:', error);
//                 set({ isLoading: false, error: 'Error fetching movies'});
//             }
//         },

//         setUrl: (url : string) => set({ url }),
//     }
// ))

// export default useMovies;


import { create } from 'zustand';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

interface MoviesType {
  movies: Movie[];
  isLoading: boolean;
  error: string;
  fetchMovies: (url: string) => void; // Thêm tham số url vào hàm fetchMovies
}

const useMovies = create<MoviesType>((set) => ({
  movies: [],
  isLoading: false,
  error: '',

  fetchMovies: async (url: string) => { // Thêm tham số url vào hàm fetchMovies
    try {
      set({ isLoading: true, error: '' });
      const response = await axios.get(url, { // Sử dụng tham số url truyền vào
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8',
        },
      });
      set({ movies: response.data.results, isLoading: false });
    } catch (error) {
      console.error('Error fetching movies:', error);
      set({ isLoading: false, error: 'Error fetching movies' });
    }
  },
}));

export default useMovies;