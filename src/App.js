import "./App.css";
import "./components.css";

import { SearchBox } from "./components/Search";

import Routes from "./Routes";

const App = () => {
  return (
    <main className="scrollbar dark:bg-neutral-900 dark:text-white overflow-hidden transition-colors">
      <Routes />
      <SearchBox />
    </main>
  );
};

export default App;
