import "./App.css";
import './components.css';

import { Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import { SearchBox } from "./components/Search";

const App = () => {
  return (
    <div className="App dark:bg-neutral-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <SearchBox />
    </div>
  );
};

export default App;
