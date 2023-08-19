import React from 'react'
import HomeBackGround from '../components/HomeBackGround'
import GetMovies from '../components/GetMovies'
import TitleMovies from '../components/TitleMovies'
import NextPage from '../components/NextPage'

const HomePage = () => {
  return (
    <>
      <section className={`home container`}>
        <HomeBackGround img = "./imgs/img-home-background.png"/>
      </section>
      <section className={`popular container pt-10`}>
        <TitleMovies label ="Popular Movies"/>
        <GetMovies url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"/>
      </section>
      <section className={`nowplaying container pt-10`}>
        <TitleMovies label ="Movies and shows"/>
        <GetMovies url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"/>
      </section>
      <section className={`nowplaying container pt-10`}>
        <GetMovies url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2"/>
      </section>
      <NextPage/>
    </>
  )
}

export default HomePage