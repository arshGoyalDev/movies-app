import React, { useState } from "react";
import { SearchIcon } from "./icons";

import searchIllustration from "../assets/images/search-illustration.svg";
import { useFetch } from "../hooks";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [peopleResults, setPeopleResults] = useState(null);

  const FetchData = async (type) => {
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}&language=en-US&page=1&include_adult=false`;
    const res = await fetch(url);
    const data = await res.json();

    return data.results;
  };

  const getResults = async () => {
    if (searchValue.replaceAll(" ", "") === "") return;
    setLoading(true);

    await FetchData("movie").then((results) => {
      setMovieResults(results);
    });
    await FetchData("tv").then((results) => {
      setTvResults(results);
    });
    await FetchData("person").then((results) => {
      setPeopleResults(results);
    });

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
              className="w-full py-3 px-4 text-sm bg-transparent focus:outline-none"
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
        {loading === "not-started" && (
          <div className="pt-10 grid place-items-center">
            <img
              src={searchIllustration}
              alt="search illustration by undraw.co"
              className="w-60"
            />
          </div>
        )}

        {loading && (
          <div className="pt-5">
            <div className="w-32 h-5 bg-gray-300 dark:bg-neutral-900 rounded"></div>
            <div className="w-full h-24 bg-gray-300 dark:bg-neutral-900 rounded mt-2"></div>
            <div className="w-32 h-5 bg-gray-300 dark:bg-neutral-900 rounded mt-6"></div>
            <div className="w-full h-24 bg-gray-300 dark:bg-neutral-900 rounded mt-2"></div>
            <div className="w-32 h-5 bg-gray-300 dark:bg-neutral-900 rounded mt-6"></div>
            <div className="w-full h-28 bg-gray-300 dark:bg-neutral-900 rounded mt-2"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
