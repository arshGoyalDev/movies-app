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
      className="relative min-w-[240px] h-32 bg-gray-100 dark:bg-neutral-700 rounded-xl cursor-pointer overflow-hidden"
    >
      <div className="absolute z-[1] w-full h-full grid place-items-center">
        {data.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt="backdrop"
            className="w-full"
          />
        ) : (
          <ImageIcon className="icon w-8 h-8" />
        )}
      </div>
      <div
        className={`absolute z-[2] flex flex-col ${
          data.vote_average !== 0 ? "justify-between" : "justify-end"
        } w-full h-full bg-black ${data.backdrop_path ? "bg-opacity-40" : "bg-opacity-60"}`}
      >
        {data.vote_average !== 0 && (
          <div className="flex items-center gap-2 w-max py-1 px-2 bg-black mt-2 mx-3 rounded-xl">
            <StarSolidIcon className="w-3 h-3 rating-icon" />
            <span className="text-white text-xs font-medium pt-0.5">
              {data.vote_average.toFixed(1)}
            </span>
          </div>
        )}
        <div className="py-2 px-3 bg-black bg-opacity-30 backdrop-blur-2xl mb-2 mx-2 rounded-xl">
          {data.title ? (
            <h4 className="font-medium text-white">
              {data.title.length > 20
                ? `${data.title.slice(0, 20)}...`
                : data.title}
            </h4>
          ) : (
            <h4 className="font-medium text-white">
              {data.name.length > 20
                ? `${data.name.slice(0, 20)}...`
                : data.name}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBackdropCard;
