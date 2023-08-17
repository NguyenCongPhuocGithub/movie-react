import React from 'react'
import MovieList from '../../MovieList';

const Content = () => {

  React.useEffect(()=> {
    document.title = 'Content';
  },[])

  return (
    <>
    <div className="container">

    <h1>Content</h1>
      <MovieList url='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'/>
      <MovieList url='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'/>
      <MovieList url='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'/>
    </div>
    </>
  )
}

export default Content