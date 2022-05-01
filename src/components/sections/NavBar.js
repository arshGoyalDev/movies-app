import { Link } from "react-router-dom";

import search from "../../assets/images/search.svg";

import SearchBar from "../SearchBar";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full py-6 px-6 md:px-16">
      <Link to="/">
        <p className="text-2xl font-medium tracking-widest xl:hidden">
          Movies.info
        </p>
      </Link>

      <div className="flex items-center gap-6">
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
          <div className="xl:hidden grid place-items-center w-10 h-10 bg-gray-100 rounded-full">
            <img src={search} alt="search icon by uicons" className="w-4" />
          </div>
        </Link>

        <div className="hidden xl:flex">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
