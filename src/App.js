import { useLocation } from "react-router-dom";
import "./App.css";
import "./components.css";

import { SearchBox } from "./components/Search";
import { BottomNav, NavBar, SideBar } from "./components/sections";

import Routes from "./Routes";

const App = () => {

  const location = useLocation();

  console.log(location);

  return (
    <main className="flex min-h-screen dark:bg-neutral-900 h-screen dark:text-white transition-colors">
      <SideBar />

      <section className="w-full pb-32 sm:pb-16 overflow-x-hidden overflow-y-auto scrollbar">
        <NavBar />
        <BottomNav />

        <Routes />
      </section>

      <SearchBox />
    </main>
  );
};

export default App;
