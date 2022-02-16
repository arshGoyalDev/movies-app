import "./components/styles/App.scss";
import "./components/styles/Loading.scss";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Category from "./pages/Category";

import Home from "./pages/Home";
import Query from "./pages/Query";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie" element={<Query key="movie" type="movie" />}>
          <Route path=":tvShowID" element={<Home />} />
        </Route>

        <Route path="/tv" element={<Query key="tv-shows" type="tv" />}>
          <Route path=":tvShowID" element={<Home />} />
        </Route>

        <Route path="category/:query" element={<Categories />}>
          <Route path=":categoryId" element={<Category />} />
        </Route>

        <Route path="*" element={<div>It nothing here</div>} />
      </Routes>
    </div>
  );
};

export default App;
