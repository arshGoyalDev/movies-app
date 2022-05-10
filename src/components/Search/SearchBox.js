import React, { useState } from "react";
import { SearchIcon } from "../icons";

import searchIllustration from "../../assets/images/search-illustration.svg";
import SearchResults from "./SearchResults";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const [loading, setLoading] = useState("");
  const [movieResults, setMovieResults] = useState(null)
  const [tvResults, setTvResults] = useState(null);
  const [personResults, setPersonResults] = useState(null)

  const fetchResults = async (type) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`);
    const data = await res.json();
    
    return data.results;
  }

  const getResults = async () => {
    if (searchValue.replaceAll(" ", "") === "") return;
    
    setStartSearch(true);
    setLoading(true);
    const movies = await fetchResults("movie");
    const tvShows = await fetchResults("tv");
    const people = await fetchResults("person");

    setMovieResults(movies);
    setTvResults(tvShows);
    setPersonResults(people);
    setLoading(false);
  };

  return (
    <>
      <div className="fixed z-40 w-full h-full bg-black bg-opacity-50"></div>
      <div className="fixed z-50 inset-1/2 -translate-x-1/2 -translate-y-1/2 py-6 px-6 w-[90%] md:w-[500px] h-max bg-gray-100 dark:bg-neutral-800 rounded-xl">
        <h3 className="text-2xl font-semibold">Search</h3>

        <div className="w-[100%] flex items-center border-2 border-solid border-gray-500 dark:border-neutral-700 rounded-md mt-4">
          <button
            onClick={getResults}
            className="ml-2 w-10 h-10 grid place-items-center"
          >
            <SearchIcon className="icon w-4 h-4" />
          </button>
          <div className="relative w-full">
            <input
              type="text"
              name="search"
              id="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) getResults();
              }}
              className="w-full py-3 px-2 text-sm bg-transparent focus:outline-none"
            />
            <span
              className={`placeholder-text absolute left-0 top-1/2 -translate-y-1/2 w-full pointer-events-none text-sm text-gray-500 dark:text-neutral-500 ${
                searchValue !== "" && "opacity-0 left-4"
              } px-2 transition-all duration-300`}
            >
              Search for movies, tv-s...
            </span>
          </div>
        </div>
        {startSearch ? (
          <div className="scrollbar flex flex-col gap-5 mt-6 pb-10 max-h-72 overflow-y-auto">
            <SearchResults heading="Movies" loading={loading} data={movieResults} />
            <SearchResults heading="TV Shows" loading={loading} data={tvResults} />
            <SearchResults heading="People" loading={loading} data={personResults} />
          </div>
        ) : (
          <div className="pt-10 pb-5 grid place-items-center">
            <img
              src={searchIllustration}
              alt="search illustration by undraw.co"
              className="w-60"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
