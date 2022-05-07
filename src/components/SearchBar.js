import { useState } from "react";

import { SearchIcon } from "./icons";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative flex items-center bg-gray-100 dark:bg-neutral-800 rounded-md">
      <button className="ml-2 w-10 h-10 grid place-items-center">
        <SearchIcon className="icon w-4 h-4" />
      </button>
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
          className={`placeholder-text absolute left-0 top-1/2 -translate-y-1/2 w-full pointer-events-none text-sm text-gray-500 dark:text-neutral-500 ${
            searchValue !== "" && "opacity-0 left-4"
          } px-2 transition-all duration-300`}
        >
          Search for movies, tv-shows or people
        </span>
      </div>

      <div className="absolute right-3 flex gap-1.5">
        <span className="font-semibold py-0.5 px-2 bg-gray-300 dark:bg-neutral-900 rounded">
          Ctrl
        </span>
        <span className="font-semibold py-0.5 px-2 bg-gray-300 dark:bg-neutral-900 rounded">
          K
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
