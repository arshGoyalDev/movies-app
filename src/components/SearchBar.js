import { useState } from "react";

import { SearchIcon } from "./icons";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded">
      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-96 py-3 px-4 text-sm bg-transparent focus:outline-none"
        />
        <span
          className={`placeholder-text absolute left-0 top-1/2 -translate-y-1/2 w-full pointer-events-none text-sm text-gray-500 dark:text-neutral-500 px-4 ${
            searchValue !== "" && "opacity-0 left-4"
          } transition-all duration-300`}
        >
          Search for movies, tv-shows or people
        </span>
      </div>
      <button className="w-16 h-10 grid place-items-center">
        <SearchIcon className="icon w-4 h-4" />
      </button>
    </div>
  );
};

export default SearchBar;
