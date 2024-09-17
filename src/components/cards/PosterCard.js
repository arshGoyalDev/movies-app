import { Link } from "react-router-dom";

import { ImageIcon, StarSolidIcon } from "../icons";

const PosterCard = ({ data }) => {
  return (
    <Link
      to={data.title ? `/movies/${data.id}` : `/tv-shows/${data.id}`}
      className="relative min-w-[150px] sm:min-w-[160px] 2xl:min-w-[190px] h-56 sm:h-60 2xl:h-72 rounded-xl cursor-pointer overflow-hidden focus:outline-none"
    >
      <div className="absolute z-[1] grid place-items-center bg-gray-200 dark:bg-neutral-800 w-full h-full rounded-lg overflow-hidden">
        {data.poster_path ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.name}
            className="w-full h-full rounded-lg"
          />
        ) : (
          <ImageIcon className="icon w-10 h-10" />
        )}
      </div>
      <div
        className={`absolute z-[2] flex flex-col ${
          data.vote_average !== 0 ? "justify-between" : "justify-end"
        } w-full h-full ${data.poster_path ? "bg-black" : ""} ${
          data.poster_path ? "bg-opacity-5 dark:bg-opacity-20" : "bg-opacity-20 dark:bg-opacity-40"
        }`}
      >
        {data.vote_average !== 0 && (
          <div className="flex items-center gap-2 w-max py-1 px-2 bg-black mt-3 mx-3 rounded-xl">
            <StarSolidIcon className="w-3 h-3 rating-icon" />
            <span className="text-white text-xs font-medium pt-0.5">
              {data.vote_average.toFixed(1)}
            </span>
          </div>
        )}
        <div className="py-3 px-4 bg-black bg-opacity-30 backdrop-blur-2xl mb-2 mx-2 rounded-xl">
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
    </Link>
  );
};

export default PosterCard;
