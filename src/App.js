import './components/styles/App.scss';

import {Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './page/Home';
import Movies from './page/Movies';
import TvShows from './page/TvShows';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
      </Routes>
   </div>
  );
}

export default App;