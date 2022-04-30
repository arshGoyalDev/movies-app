import { useState } from "react";

import search from "../assets/images/search.svg";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded">
      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-96 py-3 px-4 bg-transparent focus:outline-none"
        />
        <span className={`placeholder-text absolute left-0 top-1/2 -translate-y-1/2 w-full text-gray-500 px-4 ${searchValue !== "" && "opacity-0 left-4"} transition-all`}>Search for movies, tv-shows or people</span>
      </div>
      <div className="w-16 h-10 grid place-items-center">
        <img src={search} alt="search icon by uicons" className="w-4" />
      </div>
    </div>
  );
};

export default SearchBar;
