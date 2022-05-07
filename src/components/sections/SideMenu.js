import { useContext } from "react";
import { SideMenuContext, ThemeContext } from "../../context";

import { Link, useLocation } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../assets/images/home.svg";
import { ReactComponent as MoviesIcon } from "../../assets/images/movies.svg";
import { ReactComponent as TvIcon } from "../../assets/images/tv-shows.svg";
import { ReactComponent as PeopleIcon } from "../../assets/images/people.svg";
import { ReactComponent as UpcomingIcon } from "../../assets/images/upcoming.svg";
import { ReactComponent as StarIcon } from "../../assets/images/star.svg";
import { ReactComponent as GenresIcon } from "../../assets/images/genres.svg";
import { ReactComponent as SunIcon } from "../../assets/images/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/moon.svg";

const SideMenu = () => {
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const { menuOpen, setMenuOpen } = useContext(SideMenuContext);

  return (
    <div
      className={`hidden xl:flex flex-col ${
        menuOpen ? "w-80" : "w-20"
      } py-6 border-r-2 border-solid border-gray-300 dark:border-neutral-800 transition-[width] duration-300`}
    >
      <div
        className={`flex items-center gap-4 h-10 ${
          menuOpen ? "gap-4 px-6" : "px-[26px] gap-0"
        } transition-transform duration-300`}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-8 h-8 flex items-center justify-center flex-col gap-1.5"
        >
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
        </button>
        <Link to="/">
          <p
            className={`text-2xl tracking-widest font-medium ${
              !menuOpen && "scale-x-0 w-0"
            } origin-left transition-transform duration-300`}
          >
            Movies.info
          </p>
        </Link>
      </div>

      <div className="mt-12">
        <span
          className={`text-xs font-bold text-gray-400 dark:text-neutral-500 ${
            menuOpen ? "px-6" : "px-[22px]"
          } transition-all duration-300`}
        >
          Menu
        </span>
        <ul className="flex flex-col gap-3 mt-4">
          <Link to="/">
            <li
              className={`flex items-center gap-4 h-9 py-1.5 ${menuOpen ? "px-6" : "pl-2 justify-center"}  border-l-4 border-solid ${
                location.pathname === "/"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              <HomeIcon className="icon w-5 h-5" />
              <span
                className={`font-medium ${
                  !menuOpen && "scale-x-0 w-0"
                } origin-left transition-transform duration-300`}
              >
                Home
              </span>
            </li>
          </Link>
          <Link to="/movies">
            <li
              className={`flex items-center gap-4 h-9 py-1.5 ${menuOpen ? "px-6" : "pl-2 justify-center"}  border-l-4 border-solid ${
                location.pathname === "/movies"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              <MoviesIcon className="icon w-5 h-5" />
              <span
                className={`font-medium ${
                  !menuOpen && "scale-x-0 w-0"
                } origin-left transition-transform duration-300`}
              >
                Movies
              </span>
            </li>
          </Link>
          <Link to="/tv-shows">
            <li
              className={`flex items-center gap-4 h-9 py-1.5 ${menuOpen ? "px-6" : "pl-2 justify-center"}  border-l-4 border-solid ${
                location.pathname === "/tv-shows"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              <TvIcon className="icon w-5 h-5" />
              <span
                className={`font-medium ${
                  !menuOpen && "scale-x-0 w-0"
                } origin-left transition-transform duration-300`}
              >
                Tv Shows
              </span>
            </li>
          </Link>
          <Link to="/people">
            <li
              className={`flex items-center gap-4 h-9 py-1.5 ${menuOpen ? "px-6" : "pl-2 justify-center"}  border-l-4 border-solid ${
                location.pathname === "/people"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              <PeopleIcon className="icon w-5 h-5" />
              <span
                className={`font-medium ${
                  !menuOpen && "scale-x-0 w-0"
                } origin-left transition-transform duration-300`}
              >
                People
              </span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="mt-8">
        <span
          className={`text-xs font-bold text-gray-400 dark:text-neutral-500 ${
            menuOpen ? "px-6" : "px-[22px]"
          } transition-all duration-300`}
        >
          More
        </span>
        <ul className="flex flex-col gap-3 mt-4">
          <Link to="/upcoming">
            <li
              className={`flex items-center gap-4 h-9 py-1.5 ${menuOpen ? "px-6" : "pl-2 justify-center"}  border-l-4 border-solid ${
                location.pathname === "/upcoming"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              <UpcomingIcon className="icon w-5 h-5" />
              <span
                className={`font-medium ${
                  !menuOpen && "scale-x-0 w-0"
                } origin-left transition-transform duration-300`}
              >
                Upcoming
              </span>
            </li>
          </Link>
          <Link to="/top-rated">
            <li
              className={`flex items-center gap-4 h-9 py-1.5 ${menuOpen ? "px-6" : "pl-2 justify-center"}  border-l-4 border-solid ${
                location.pathname === "/top-rated"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              <StarIcon className="icon w-5 h-5" />
              <span
                className={`font-medium ${
                  !menuOpen && "scale-x-0 w-0"
                } origin-left transition-transform duration-300`}
              >
                Top Rated
              </span>
            </li>
          </Link>
          <Link to="/genres">
            <li
              className={`flex items-center gap-4 h-9 py-1.5 ${menuOpen ? "px-6" : "pl-2 justify-center"}  border-l-4 border-solid ${
                location.pathname === "/genres"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              <GenresIcon className="icon w-5 h-5" />
              <span
                className={`font-medium ${
                  !menuOpen && "scale-x-0 w-0"
                } origin-left transition-transform duration-300`}
              >
                Genres
              </span>
            </li>
          </Link>
        </ul>
      </div>

      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className={`flex items-center ${
          menuOpen ? "flex-row gap-4" : "flex-col gap-1"
        } px-6 mt-auto mb-0`}
      >
        {theme === "dark" ? (
          <MoonIcon className="icon w-5 h-5" />
        ) : (
          <SunIcon className="icon w-5 h-5" />
        )}
        <span
          className={`capitalize font-medium ${
            !menuOpen && "scale-x-0 w-0 h-0"
          } origin-left transition-transform duration-300`}
        >
          {theme}
        </span>
        <span
          className={`capitalize text-sm origin-top ${
            !menuOpen ? "block" : "hidden"
          }`}
        >
          {theme}
        </span>
      </button>
    </div>
  );
};

export default SideMenu;
