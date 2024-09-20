import {Link, useLocation} from "react-router-dom";

import {HomeIcon, MoviesIcon, TvIcon, PeopleIcon} from "../icons";

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav
      className="sm:hidden fixed z-[10000] -bottom-1 w-full flex justify-between items-center py-5 px-6 bg-white dark:bg-neutral-900 rounded-t-[30px] shadow-[0_-10px_60px_rgba(100,100,100,0.4)] dark:shadow-none">
      <Link to="/">
        <div className="grid place-items-center w-20 h-10">
          <HomeIcon
            className={`icon w-6 h-6 ${
              location.pathname !== "/" ? "block" : "hidden"
            }`}
          />
          <div
            className={`flex-col items-center gap-1 ${
              location.pathname === "/" ? "flex" : "hidden"
            }`}
          >
            <span className="font-medium">Home</span>
            <span className="block w-5 h-1 bg-neutral-800 dark:bg-gray-300 rounded-md"></span>
          </div>
        </div>
      </Link>
      <Link to="/movies">
        <div className="grid place-items-center w-20 h-10">
          <MoviesIcon
            className={`icon w-6 h-6 ${
              location.pathname !== "/movies" ? "block" : "hidden"
            }`}
          />
          <div
            className={`flex-col items-center gap-1 ${
              location.pathname === "/movies" ? "flex" : "hidden"
            }`}
          >
            <span className="font-medium">Movies</span>
            <span className="block w-5 h-1 bg-neutral-800 dark:bg-gray-300 rounded-md"></span>
          </div>
        </div>
      </Link>
      <Link to="/tv-shows">
        <div className="grid place-items-center w-20 h-10">
          <TvIcon
            className={`icon w-6 h-6 ${
              location.pathname !== "/tv-shows" ? "block" : "hidden"
            }`}
          />
          <div
            className={`flex-col items-center gap-1 ${
              location.pathname === "/tv-shows" ? "flex" : "hidden"
            }`}
          >
            <span className="font-medium">TV Shows</span>
            <span className="block w-5 h-1 bg-neutral-800 dark:bg-gray-300 rounded-md"></span>
          </div>
        </div>
      </Link>
      <Link to="/people">
        <div className="grid place-items-center w-20 h-10">
          <PeopleIcon
            className={`icon w-6 h-6 ${
              location.pathname !== "/people" ? "block" : "hidden"
            }`}
          />
          <div
            className={`flex-col items-center gap-1 ${
              location.pathname === "/people" ? "flex" : "hidden"
            }`}
          >
            <span className="font-medium">People</span>
            <span className="block w-5 h-1 bg-neutral-800 dark:bg-gray-300 rounded-md"></span>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
