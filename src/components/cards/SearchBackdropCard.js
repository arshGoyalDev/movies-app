import Rating from "../Rating";

import { ImageIcon, MenuDotsIcon, StarIcon } from "../icons";

const SearchBackdropCard = ({ data }) => {
  return (
    <div className="flex gap-4 min-w-[300px] bg-gray-200 dark:bg-neutral-700 rounded-lg">
      <div className="grid place-items-center bg-gray-300 dark:bg-neutral-600 w-[120px] h-full rounded-lg overflow-hidden">
        {data.backdrop_path ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title ?? data.name}
            className="w-full h-full"
          />

        ) : (
          <ImageIcon className="icon w-10 h-10" />
        )}
      </div>
      <div className="flex flex-col justify-between items-start py-4">
        <p className="dark:text-white font-medium">{(data.title ?? data.name).length <= 20 ? (data.title ?? data.name) : `${(data.title ?? data.name).slice(0, 20)}...`}</p>
        <div>
          <div className="flex items-center gap-3">
          <StarIcon className="rating-icon w-4 h-4" />
          <span className="text-primary-light dark:text-primary-dark">{data.vote_average}</span>
          </div>
        </div>
        <button className="grid place-items-center min-w-[40px] h-10 bg-gray-300 dark:bg-neutral-600 rounded-full">
          <MenuDotsIcon className="icon w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchBackdropCard;
