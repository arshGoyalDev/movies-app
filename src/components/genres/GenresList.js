import React from "react";
import { Link } from "react-router-dom";

const GenresList = ({ type, list, loading }) => {
  return (
    <>
      {loading ? (
        <div className="px-6 md:px-16 xl:pr-24 xl:pl-10">
          <div className="animate-skeleton w-64 h-6 rounded-md"></div>
          <div className="flex flex-wrap gap-3 mt-5">
            <div className="animate-skeleton w-28 h-10 rounded-md"></div>
            <div className="animate-skeleton w-24 h-10 rounded-md"></div>
            <div className="animate-skeleton w-40 h-10 rounded-md"></div>
            <div className="animate-skeleton w-52 h-10 rounded-md"></div>
            <div className="animate-skeleton w-28 h-10 rounded-md"></div>
            <div className="animate-skeleton w-44 h-10 rounded-md"></div>
            <div className="animate-skeleton w-24 h-10 rounded-md"></div>
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-16 xl:pr-24 xl:pl-10">
          <h3 className="text-lg capitalize font-medium">
            {type === "movie" ? "Movies Genres" : "Tv Shows Genres"}
          </h3>

          <div className="flex flex-wrap gap-3 mt-5">
            {list.map((item) => (
              <Link key={item.id} to={`/genres/${type}/${item.id}`}>
                <button className="font-medium py-2 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GenresList;
