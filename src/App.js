import './components/styles/App.scss';

import NavBar from './components/NavBar';
import Trending from './components/Trending';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Trending category="all" />
   </div>
  );
}

export default App;