import "./components/styles/App.scss";
import "./components/styles/Loading.scss";

import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Details from "./components/Details";

import Home from "./pages/Home";
import Query from "./pages/Query";
import Genre from "./pages/Genre";

const App = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);

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

        <Route path="*" element={<div>It nothing here</div>} />
      </Routes>
    </div>
  );
};

export default App;
