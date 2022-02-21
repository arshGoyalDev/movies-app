import "./components/styles/App.scss";
import "./components/styles/Loading.scss";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Details from "./components/Details";

import Home from "./pages/Home";
import Query from "./pages/Query";
import Genre from "./pages/Genre";
import { useEffect, useState } from "react";

const App = () => {
  const [scrollable, setScrollable] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    if (!scrollable) {
      document.body.classList.add("overflow--hidden");
      scrollToTop();
    } else {
      document.body.classList.remove("overflow--hidden");
    }
  }, [scrollable]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/movie"
          element={<Query key="movies" type="movie" scrollable={scrollable} />}
        >
          <Route
            path=":id"
            element={<Details query="movie" setScrollable={setScrollable} />}
          />
        </Route>

        <Route
          path="/tv"
          element={<Query key="tv-shows" type="tv" scrollable={scrollable} />}
        >
          <Route
            path=":id"
            element={<Details query="tv" setScrollable={setScrollable} />}
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
