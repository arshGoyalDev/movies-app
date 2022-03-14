import "./components/styles/App.scss";

import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Error from "./components/Error";

import Details from "./components/Details";
import { ProfileDetails, VideoPlayer } from "./components/more";

import Home from "./pages/Home";
import Query from "./pages/Query";
import Genre from "./pages/Genre";
import Results from "./pages/Results";

import { useSelector } from "react-redux";

const App = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const { visible: videoVisible } = useSelector(
    (state) => state.videoDetails.value
  );
  const { visible: profileVisible } = useSelector(
    (state) => state.profileDetails.value
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [detailsVisible]);

  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movie" element={<Query key="movies" type="movie" />}>
            <Route
              path=":id"
              element={
                <Details query="movie" setDetailsVisible={setDetailsVisible} />
              }
            />
          </Route>

          <Route path="/tv" element={<Query key="tv-shows" type="tv" />}>
            <Route
              path=":id"
              element={
                <Details query="tv" setDetailsVisible={setDetailsVisible} />
              }
            />
          </Route>

          <Route path="genre/:query" element={<Genre />}>
            <Route path=":genreId" element={<Genre />} />
          </Route>

          <Route path="search/:searchQuery" element={<Results />} />

          <Route path="*" element={<Error />} />
        </Routes>

        {videoVisible && <VideoPlayer />}

        {profileVisible && <ProfileDetails />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
