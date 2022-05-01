import { Link, useLocation } from "react-router-dom";

import home from "../../assets/images/home.svg";
import movies from "../../assets/images/movies.svg";
import tvShows from "../../assets/images/tv-shows.svg";
import people from "../../assets/images/people.svg";
import upcoming from "../../assets/images/upcoming.svg";
import star from "../../assets/images/star.svg";
import genres from "../../assets/images/genres.svg";

const SideMenu = () => {
  const location = useLocation();

  return (
    <div className="hidden xl:flex flex-col w-80 py-6 border-r-2 border-solid border-gray-300 dark:border-neutral-800">
      <Link to="/">
        <p className="text-2xl font-medium tracking-widest px-6">Movies.info</p>
      </Link>

      <div className="mt-12">
        <span className="text-xs font-bold text-gray-400 dark:text-neutral-500 px-6">
          Menu
        </span>
        <ul className="flex flex-col gap-4 mt-4">
          <Link to="/">
            <li
              className={`flex items-center gap-4 py-1.5 px-6 border-l-4 border-solid ${
                location.pathname === "/"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-all`}
            >
              <img
                src={home}
                alt="home icon by uicons"
                className="w-5 dark:invert"
              />
              <span className="font-medium">Home</span>
            </li>
          </Link>
          <Link to="/movies">
            <li
              className={`flex items-center gap-4 py-1.5 px-6 border-l-4 border-solid ${
                location.pathname === "/movies"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-all`}
            >
              <img
                src={movies}
                alt="movies icon by uicons"
                className="w-5 dark:invert"
              />
              <span className="font-medium">Movies</span>
            </li>
          </Link>
          <Link to="/tv-shows">
            <li
              className={`flex items-center gap-4 py-1.5 px-6 border-l-4 border-solid ${
                location.pathname === "/tv-shows"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-all`}
            >
              <img
                src={tvShows}
                alt="tv icon by uicons"
                className="w-5 dark:invert"
              />
              <span className="font-medium">Tv Shows</span>
            </li>
          </Link>
          <Link to="/people">
            <li
              className={`flex items-center gap-4 py-1.5 px-6 border-l-4 border-solid ${
                location.pathname === "/people"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-all`}
            >
              <img
                src={people}
                alt="people icon by uicons"
                className="w-5 dark:invert"
              />
              <span className="font-medium">People</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="mt-8">
        <span className="text-xs font-bold text-gray-400 dark:text-neutral-500 px-6">
          More
        </span>
        <ul className="flex flex-col gap-4 mt-4">
          <Link to="/upcoming">
            <li
              className={`flex items-center gap-4 py-1.5 px-6 border-l-4 border-solid ${
                location.pathname === "/upcoming"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-all`}
            >
              <img
                src={upcoming}
                alt="home icon by uicons"
                className="w-5 dark:invert"
              />
              <span className="font-medium">Upcoming</span>
            </li>
          </Link>
          <Link to="/top-rated">
            <li
              className={`flex items-center gap-4 py-1.5 px-6 border-l-4 border-solid ${
                location.pathname === "/top-rated"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-all`}
            >
              <img
                src={star}
                alt="movies icon by uicons"
                className="w-5 dark:invert"
              />
              <span className="font-medium">Top Rated</span>
            </li>
          </Link>
          <Link to="/genres">
            <li
              className={`flex items-center gap-4 py-1.5 px-6 border-l-4 border-solid ${
                location.pathname === "/genres"
                  ? "border-primary-light dark:border-primary-dark"
                  : "border-transparent"
              } hover:border-primary-light dark:hover:border-primary-dark transition-all`}
            >
              <img
                src={genres}
                alt="tv icon by uicons"
                className="w-5 dark:invert"
              />
              <span className="font-medium">Genres</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
