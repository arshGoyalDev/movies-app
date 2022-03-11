import "./components/styles/App.scss";

import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import { Details } from "./components/Details";
import Footer from "./components/Footer";
import Error from "./components/Error";

import Home from "./pages/Home";
import Query from "./pages/Query";
import Genre from "./pages/Genre";
import Results from "./pages/Results";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoDetails, setVideoDetails] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [detailsVisible]);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie" element={<Query key="movies" type="movie" />}>
          <Route
            path=":id"
            element={
              <Details
                query="movie"
                setDetailsVisible={setDetailsVisible}
                setPlaying={setPlaying}
                setVideoDetails={setVideoDetails}
              />
            }
          />
        </Route>

        <Route path="/tv" element={<Query key="tv-shows" type="tv" />}>
          <Route
            path=":id"
            element={
              <Details
                query="tv"
                setDetailsVisible={setDetailsVisible}
                setPlaying={setPlaying}
                setVideoDetails={setVideoDetails}
              />
            }
          />
        </Route>

        <Route path="genre/:query" element={<Genre />}>
          <Route path=":genreId" element={<Genre />} />
        </Route>

        <Route path="search/:searchQuery" element={<Results />} />

        <Route path="*" element={<Error />} />
      </Routes>

      {playing && (
        <VideoPlayer
          setPlaying={setPlaying}
          videoDetails={videoDetails}
          setVideoDetails={setVideoDetails}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
