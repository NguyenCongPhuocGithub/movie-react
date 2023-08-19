import "./App.css";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import MoviesDetailPage from "./pages/MoviesDetailPage";

const App = () => {
  return (
    <>
       <BrowserRouter>
          <Routes>
          <Route path="/" element={<Layout/>} >
              <Route index element={<HomePage/>} />
              <Route path="/popular" element={<PopularPage/>}/>
              <Route path="/nowplaying" element={<NowPlayingPage/>}/>
              <Route path="/moviesdetail/:id" element={<MoviesDetailPage/>}/>
              <Route path="*" element={<NoPage/>} />
              </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
