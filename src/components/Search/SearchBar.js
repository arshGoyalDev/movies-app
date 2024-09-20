import {useContext} from "react";
import {SearchContext} from "../../context";

import {SearchIcon, VoiceIcon} from "../icons";

const SearchBar = () => {
  const {setSearch, searchQuery, setSearchQuery, setVoiceSearch} =
    useContext(SearchContext);

  const showSearchBox = () => {
    if (searchQuery.replaceAll(" ", "").length === 0) return;
    setSearch(true);
  };

  return (
    <div className="relative flex items-center pl-2 bg-gray-50 dark:bg-neutral-900 rounded-md">
      <button
        className="w-10 h-10 grid place-items-center rounded"
        onClick={showSearchBox}
      >
        <SearchIcon className="icon w-4 h-4"/>
      </button>
      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onKeyDown={(e) => {
            if (e.keyCode === 13) showSearchBox();
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-96 py-3.5 px-2 text-sm bg-transparent focus:outline-none"
        />
        <span
          className={`placeholder-text absolute left-0 top-1/2 -translate-y-1/2 w-full pointer-events-none text-sm text-gray-400 dark:text-neutral-500 ${
            searchQuery !== "" && "opacity-0 left-4"
          } px-2 transition-all duration-300`}
        >
          Search for movies, tv-shows or people
        </span>
      </div>
      <button
        onClick={() => setVoiceSearch(true)}
        className="w-10 h-10 grid place-items-center rounded mr-2"
      >
        <VoiceIcon className="w-4 h-4 icon"/>
      </button>
    </div>
  );
};

export default SearchBar;
