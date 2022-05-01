import { Link, useLocation } from "react-router-dom";

import home from "../../assets/images/home.svg";
import movies from "../../assets/images/movies.svg";
import tvShows from "../../assets/images/tv-shows.svg";
import people from "../../assets/images/people.svg";

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="sm:hidden fixed bottom-0 w-full flex justify-between items-center py-5 px-6 rounded-t-[30px] shadow-[0_-10px_60px_rgba(100,100,100,0.4)]">
      <Link to="/">
        <div className="grid place-items-center w-16 h-10">
          <img
            src={home}
            alt="home icon by uicons"
            className={`w-6  ${location.pathname !== "/" ? "block" : "hidden"}`}
          />
          <div
            className={`flex-col items-center gap-1 ${
              location.pathname === "/" ? "flex" : "hidden"
            }`}
          >
            <span className="font-medium">Home</span>
            <span className="block w-5 h-1 bg-black rounded-md"></span>
          </div>
        </div>
      </Link>
      <Link to="/movies">
        <div className="grid place-items-center w-16 h-10">
          <img
            src={movies}
            alt="home icon by uicons"
            className={`w-6  ${
              location.pathname !== "/movies" ? "block" : "hidden"
            }`}
          />
          <div
            className={`flex-col items-center gap-1 ${
              location.pathname === "/movies" ? "flex" : "hidden"
            }`}
          >
            <span className="font-medium">Home</span>
            <span className="block w-5 h-1 bg-black rounded-md"></span>
          </div>
        </div>
      </Link>
      <Link to="/tv-shows">
        <div className="grid place-items-center w-16 h-10">
          <img
            src={tvShows}
            alt="home icon by uicons"
            className={`w-6  ${
              location.pathname !== "/tv-shows" ? "block" : "hidden"
            }`}
          />
          <div
            className={`flex-col items-center gap-1 ${
              location.pathname === "/tv-shows" ? "flex" : "hidden"
            }`}
          >
            <span className="font-medium">Home</span>
            <span className="block w-5 h-1 bg-black rounded-md"></span>
          </div>
        </div>
      </Link>
      <Link to="/people">
        <div className="grid place-items-center w-16 h-10">
          <img
            src={people}
            alt="home icon by uicons"
            className={`w-6  ${
              location.pathname !== "/people" ? "block" : "hidden"
            }`}
          />
          <div
            className={`flex-col items-center gap-1 ${
              location.pathname === "/people" ? "flex" : "hidden"
            }`}
          >
            <span className="font-medium">Home</span>
            <span className="block w-5 h-1 bg-black rounded-md"></span>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
