import "./components/styles/App.scss";

import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Details from "./components/Details";
import VideoPlayer from "./components/VideoPlayer";
import ProfileDetails from "./components/ProfileDetails";

import Home from "./pages/Home";
import Query from "./pages/Query";
import Genre from "./pages/Genre";
import Results from "./pages/Results";

import { useSelector } from "react-redux";

const App = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const { visible: videoVisible } = useSelector(
    (state) => state.videoDetails.value
  );
  const { visible: profileVisible } = useSelector(
    (state) => state.profileDetails.value
  );
  const { visible: reviewVisible } = useSelector(
    (state) => state.review.value
  );
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    !scroll
      ? document.body.classList.add("hide-scroll")
      : document.body.classList.remove("hide-scroll");
  }, [scroll]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [scrollTop]);

  return (
    <div className="App">
      <NavBar setScroll={setScroll} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movie" element={<Query key="movies" type="movie" />}>
            <Route
              path=":id"
              element={<Details query="movie" setScrollTop={setScrollTop} />}
            />
          </Route>

          <Route path="/tv" element={<Query key="tv-shows" type="tv" />}>
            <Route
              path=":id"
              element={<Details query="tv" setScrollTop={setScrollTop} />}
            />
          </Route>

          <Route
            path="genre/:query"
            element={<Genre setScrollTop={setScrollTop} />}
          >
            <Route
              path=":genreId"
              element={<Genre setScrollTop={setScrollTop} />}
            />
          </Route>

          <Route path="search/:searchQuery" element={<Results />} />

          <Route path="*" element={<Error />} />
        </Routes>

        {videoVisible && <VideoPlayer />}

        {profileVisible && <ProfileDetails />}

        {reviewVisible && console.log("visible...")}
      </main>

      <Footer />
    </div>
  );
};

export default App;
