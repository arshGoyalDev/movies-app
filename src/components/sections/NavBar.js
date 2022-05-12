import { useContext } from "react";
import { SearchContext, SideMenuContext, ThemeContext } from "../../context";

import { Link } from "react-router-dom";

import {SearchBar} from "../Search";

import { SunIcon, MoonIcon, SearchIcon } from "../icons";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { menuOpen } = useContext(SideMenuContext);
  const {setSearch} = useContext(SearchContext);

  return (
    <nav
      className={`flex items-center justify-between w-full py-6 px-6 md:px-16 ${
        menuOpen ? "xl:px-24" : "xl:pr-24 xl:pl-10"
      }`}
    >
      <Link to="/">
        <p
          className={`text-2xl font-medium tracking-widest origin-left transition-transform duration-300 ${
            !menuOpen ? "scale-x-100 w-auto" : "xl:hidden"
          }`}
        >
          Movies.info
        </p>
      </Link>

      <div className="flex items-center gap-4">
        <ul className="hidden xl:hidden sm:flex items-center gap-4">
          <li className="py-2 px-2">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="py-2 px-2">
            <Link to="/tv-shows">TV Shows</Link>
          </li>
          <li className="py-2 px-2">
            <Link to="/people">People</Link>
          </li>
        </ul>

          <button onClick={() => setSearch(true)} className="xl:hidden grid place-items-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-full">
            <SearchIcon className="icon w-3.5 h-3.5" />
          </button>

        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="xl:hidden grid place-items-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-full"
        >
          {theme === "dark" ? (
            <SunIcon className="icon w-4 h-4" />
          ) : (
            <MoonIcon className="icon w-4 h-4" />
          )}
        </button>

        <div className="hidden xl:flex">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
