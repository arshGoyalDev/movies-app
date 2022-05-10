import { ImageIcon } from "../icons";

const SearchBackdropCard = ({ data }) => {
  return (
    <div className="relative min-w-[240px] h-32 bg-gray-200 dark:bg-neutral-700 rounded-lg overflow-hidden">
      <div className="absolute z-[1] w-full h-full grid place-items-center">
        {data.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt="backdrop"
            className="w-full"
          />
        ) : (
          <ImageIcon className="icon w-10 h-10" />
        )}
      </div>
      <div className="absolute z-[2] w-full h-full flex items-end p-4 bg-black bg-opacity-40">
        <p className="text-white font-medium">
          {(data.title ?? data.name).length <= 20
            ? data.title ?? data.name
            : `${(data.title ?? data.name).slice(0, 20)}...`}
        </p>
      </div>
    </div>
  );
};

export default SearchBackdropCard;
