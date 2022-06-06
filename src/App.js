import "./App.css";
import "./components.css";

import { SearchBox } from "./components/Search";

import Routes from "./Routes";

const App = () => {
  return (
    <main>
      <Routes />
      <SearchBox />
    </main>
  );
};

export default App;
