import { useContext } from "react";
import { SideMenuContext, ThemeContext } from "../../context";

import { Link } from "react-router-dom";

import search from "../../assets/images/search.svg";

import SearchBar from "../SearchBar";

import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { menuOpen } = useContext(SideMenuContext);

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

        <Link to="/search">
          <div className="xl:hidden grid place-items-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-full">
            <img
              src={search}
              alt="search icon by uicons"
              className="w-4 dark:invert"
            />
          </div>
        </Link>

        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="xl:hidden grid place-items-center w-10 h-10 bg-gray-100 dark:bg-neutral-800 rounded-full"
        >
          <img
            src={theme !== "dark" ? moon : sun}
            alt="tv icon by uicons"
            className="w-5 dark:invert"
          />
        </button>

        <div className="hidden xl:flex">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
