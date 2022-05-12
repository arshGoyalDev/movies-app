import { useContext } from "react";
import { SideMenuContext, ThemeContext } from "../../context";

import { Link, useLocation } from "react-router-dom";

import {
  HomeIcon, HomeSolidIcon,
  MoviesIcon, MoviesSolidIcon,
  TvIcon, TvSolidIcon,
  PeopleIcon, PeopleSolidIcon,
  UpcomingIcon, UpcomingSolidIcon,
  StarIcon, StarSolidIcon, 
  GenresIcon, GenresSolidIcon,
  SunIcon, MoonIcon,
} from "../icons";

const SideBar = () => {
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
        <ul className="flex flex-col gap-1 mt-4">
          <Link to="/">
            <li
              className={`flex items-center gap-4 h-11 mx-3 rounded-md ${
                menuOpen ? "px-4" : "pl-4 justify-center"
              } ${
                location.pathname === "/" &&
                "bg-gray-200 bg-opacity-70 dark:bg-neutral-800"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              {location.pathname === "/" ? (
                <HomeSolidIcon className="active-icon w-5 h-5" />
              ) : (
                <HomeIcon className="inactive-icon w-5 h-5" />
              )}
              <span
                className={`font-medium pt-1 ${!menuOpen && "scale-x-0 w-0"} ${
                  location.pathname !== "/" &&
                  "text-gray-500 dark:text-neutral-700"
                } origin-left transition-transform duration-300`}
              >
                Home
              </span>
            </li>
          </Link>
          <Link to="/movies">
          <li
              className={`flex items-center gap-4 h-11 mx-3 rounded-md ${
                menuOpen ? "px-4" : "pl-4 justify-center"
              } ${
                location.pathname === "/movies" &&
                "bg-gray-200 bg-opacity-70 dark:bg-neutral-800"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              {location.pathname === "/movies" ? (
                <MoviesSolidIcon className="active-icon w-5 h-5" />
              ) : (
                <MoviesIcon className="inactive-icon w-5 h-5" />
              )}
              <span
                className={`font-medium pt-1 ${!menuOpen && "scale-x-0 w-0"} ${
                  location.pathname !== "/movies" &&
                  "text-gray-500 dark:text-neutral-700"
                } origin-left transition-transform duration-300`}
              >
                Movies
              </span>
            </li>
          </Link>
          <Link to="/tv-shows">
          <li
              className={`flex items-center gap-4 h-11 mx-3 rounded-md ${
                menuOpen ? "px-4" : "pl-4 justify-center"
              } ${
                location.pathname === "/tv-shows" &&
                "bg-gray-200 bg-opacity-70 dark:bg-neutral-800"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              {location.pathname === "/tv-shows" ? (
                <TvSolidIcon className="active-icon w-5 h-5" />
              ) : (
                <TvIcon className="inactive-icon w-5 h-5" />
              )}

              <span
                className={`font-medium pt-1 ${!menuOpen && "scale-x-0 w-0"} ${
                  location.pathname !== "/tv-shows" &&
                  "text-gray-500 dark:text-neutral-700"
                } origin-left transition-transform duration-300`}
              >
                Tv Shows
              </span>
            </li>
          </Link>
          <Link to="/people">
          <li
              className={`flex items-center gap-4 h-11 mx-3 rounded-md ${
                menuOpen ? "px-4" : "pl-4 justify-center"
              } ${
                location.pathname === "/people" &&
                "bg-gray-200 bg-opacity-70 dark:bg-neutral-800"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              {location.pathname === "/people" ? (
                <PeopleSolidIcon className="active-icon w-5 h-5" />
              ) : (
                <PeopleIcon className="inactive-icon w-5 h-5" />
              )}
              <span
                className={`font-medium pt-1 ${!menuOpen && "scale-x-0 w-0"} ${
                  location.pathname !== "/people" &&
                  "text-gray-500 dark:text-neutral-700"
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
        <ul className="flex flex-col gap-1 mt-4">
          <Link to="/upcoming">
          <li
              className={`flex items-center gap-4 h-11 mx-3 rounded-md ${
                menuOpen ? "px-4" : "pl-4 justify-center"
              } ${
                location.pathname === "/upcoming" &&
                "bg-gray-200 bg-opacity-70 dark:bg-neutral-800"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              {location.pathname === "/upcoming" ? (
                <UpcomingSolidIcon className="active-icon w-5 h-5" />
              ) : (
                <UpcomingIcon className="inactive-icon w-5 h-5" />
              )}
              <span
                className={`font-medium pt-1 ${!menuOpen && "scale-x-0 w-0"} ${
                  location.pathname !== "/upcoming" &&
                  "text-gray-500 dark:text-neutral-700"
                } origin-left transition-transform duration-300`}
              >
                Upcoming
              </span>
            </li>
          </Link>
          <Link to="/top-rated">
          <li
              className={`flex items-center gap-4 h-11 mx-3 rounded-md ${
                menuOpen ? "px-4" : "pl-4 justify-center"
              } ${
                location.pathname === "/top-rated" &&
                "bg-gray-200 bg-opacity-70 dark:bg-neutral-800"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              {location.pathname === "/top-rated" ? (
                <StarSolidIcon className="active-icon w-5 h-5" />
              ) : (
                <StarIcon className="inactive-icon w-5 h-5" />
              )}
              <span
                className={`font-medium pt-1 ${!menuOpen && "scale-x-0 w-0"} ${
                  location.pathname !== "/top-rated" &&
                  "text-gray-500 dark:text-neutral-700"
                } origin-left transition-transform duration-300`}
              >
                Top Rated
              </span>
            </li>
          </Link>
          <Link to="/genres">
          <li
              className={`flex items-center gap-4 h-11 mx-3 rounded-md ${
                menuOpen ? "px-4" : "pl-4 justify-center"
              } ${
                location.pathname === "/genres" &&
                "bg-gray-200 bg-opacity-70 dark:bg-neutral-800"
              } hover:border-primary-light dark:hover:border-primary-dark transition-transform`}
            >
              {location.pathname === "/genres" ? (
                <GenresSolidIcon className="active-icon w-5 h-5" />
              ) : (
                <GenresIcon className="inactive-icon w-5 h-5" />
              )}
              <span
                className={`font-medium pt-1 ${!menuOpen && "scale-x-0 w-0"} ${
                  location.pathname !== "/genres" &&
                  "text-gray-500 dark:text-neutral-700"
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

export default SideBar;
