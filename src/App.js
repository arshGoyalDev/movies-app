import "./components/styles/App.scss";
import "./components/styles/Loading.scss";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie" element={<Movies />}>
          <Route path=":movieName" element={<Movies />} />
        </Route>

        <Route path="/tv" element={<TvShows />}>
          <Route path=":TvShowName" element={<TvShows />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
