import "./components/styles/App.scss";
import "./components/styles/Loading.scss";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Category from "./pages/Category";

import Home from "./pages/Home";
import Query from "./pages/Query";
import { useState } from "react";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home setSelectedCategory={setSelectedCategory} />}
        />

        <Route
          path="/movie"
          element={
            <Query
              key="movies"
              type="movie"
              setSelectedCategory={setSelectedCategory}
            />
          }
        >
          <Route path=":id" element={<div>Hello World! I am breathing</div>} />
        </Route>

        <Route
          path="/tv"
          element={
            <Query
              key="tv-shows"
              type="tv"
              setSelectedCategory={setSelectedCategory}
            />
          }
        >
          <Route path=":id" element={<div>Hello World! I am breathing</div>} />
        </Route>

        <Route
          path="category/:query"
          element={
            <Category
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        >
          <Route
            path=":categoryId"
            element={
              <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
        </Route>

        <Route path="*" element={<div>It nothing here</div>} />
      </Routes>
    </div>
  );
};

export default App;
