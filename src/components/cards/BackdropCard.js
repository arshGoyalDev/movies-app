import { useNavigate } from "react-router-dom";

import { ImageIcon, StarSolidIcon } from "../icons";

const BackdropCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        data.title
          ? navigate(`/movies/${data.id}`)
          : navigate(`/tv-shows/${data.id}`)
      }
      className="relative min-w-[300px] h-44 rounded-2xl cursor-pointer overflow-hidden"
    >
      <div className="absolute z-[1] grid place-items-center bg-gray-200 dark:bg-neutral-800 w-full h-full rounded-lg overflow-hidden">
        {data.backdrop_path ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
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
        } w-full h-full bg-black ${
          data.backdrop_path ? "bg-opacity-40" : "bg-opacity-60"
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
    </div>
  );
};

export default BackdropCard;
