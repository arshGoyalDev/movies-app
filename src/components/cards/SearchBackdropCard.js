import { useContext } from "react";

import { SearchContext } from "../../context";

import { useNavigate } from "react-router-dom";

import { ImageIcon, StarSolidIcon } from "../icons";

const SearchBackdropCard = ({ data }) => {
  const navigate = useNavigate();
  const { setSearch } = useContext(SearchContext);

  return (
    <div
      onClick={() => {
        data.title
          ? navigate(`/movies/${data.id}`)
          : navigate(`/tv-shows/${data.id}`);
        setSearch(false);
      }}
      className="relative min-w-[240px] xl:min-w-[270px] h-32 xl:h-40 bg-gray-50 dark:bg-neutral-900 rounded-xl cursor-pointer overflow-hidden"
    >
      <div className="absolute z-[1] w-full h-full grid place-items-center">
        {data.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="backdrop"
            className="w-full h-full"
          />
        ) : (
          <ImageIcon className="icon w-8 h-8" />
        )}
      </div>
      <div
        className={`absolute z-[2] bottom-2 w-full ${data.backdrop_path ? "bg-black" : ""} ${
          data.backdrop_path
            ? "bg-opacity-5 dark:bg-opacity-20"
            : "bg-opacity-20 dark:bg-opacity-40"
        }`}
      >
        <div className="flex flex-row justify-between py-2 px-3 bg-black bg-opacity-20 dark:bg-opacity-30 backdrop-blur-2xl mx-2 rounded-xl">
          {data.title ? (
            <h4 className="font-medium text-white">
              {data.title.length > 15
                ? `${data.title.slice(0, 15)}...`
                : data.title}
            </h4>
          ) : (
            <h4 className="font-medium text-white">
              {data.name.length > 15
                ? `${data.name.slice(0, 15)}...`
                : data.name}
            </h4>
          )}
          {data.vote_average !== 0 && (
            <div className="flex items-center gap-2">
              <StarSolidIcon className="w-3 h-3 rating-icon" />
              <span className="text-white text-xs font-medium pt-0.5">
                {data.vote_average.toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBackdropCard;
