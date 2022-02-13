import './components/styles/App.scss';

import {Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';

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