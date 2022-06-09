import { useContext, useEffect, useState } from "react";

import "./App.css";
import "./components.css";

import { useLocation } from "react-router-dom";

import Routes from "./Routes";

import { SideBar, NavBar, BottomNav } from "./components/sections";
import { SideMenuContext } from "./context";
import { SearchBox } from "./components/Search";

const App = () => {
  const { menuOpen } = useContext(SideMenuContext);
  const location = useLocation();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/tv-shows" ||
      location.pathname === "/people" ||
      location.pathname === "/upcoming" ||
      location.pathname === "/top-rated" ||
      location.pathname.includes("genres")
    ) {
      setHidden(true);
      return;
    }

    setHidden(false);
  }, [location]);

  return (
    <>
      {hidden ? (
        <main className="flex min-h-screen w-full">
          <SideBar />

          <section
            className={`w-full pb-32 sm:pb-16 ${
              menuOpen ? "xl:pl-72" : "xl:pl-20"
            } transition-[padding] duration-300`}
          >
            <NavBar />

            <Routes />

            <BottomNav />
          </section>

          <SearchBox />
        </main>
      ) : (
        <main>
          <Routes />
        </main>
      )}
    </>
  );
};

export default App;
