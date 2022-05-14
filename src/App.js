import "./App.css";
import "./components.css";

import { Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import { SearchBox } from "./components/Search";
import { BottomNav, NavBar, SideBar } from "./components/sections";

const App = () => {
  return (
    <main className="flex min-h-screen dark:bg-neutral-900 h-screen dark:text-white transition-colors">
      <SideBar />

      <section className="w-full overflow-x-hidden overflow-y-auto scrollbar">
        <NavBar />
        <BottomNav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>

      <SearchBox />
    </main>
  );
};

export default App;
