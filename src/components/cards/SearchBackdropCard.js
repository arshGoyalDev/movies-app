import { useContext } from "react";

import { SearchContext } from "../../context";

import { useNavigate } from "react-router-dom";

import { ImageIcon } from "../icons";

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
      className="relative min-w-[240px] h-32 bg-gray-100 dark:bg-neutral-700 rounded-lg cursor-pointer overflow-hidden"
    >
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
      <div className="absolute z-[2] w-full h-full flex items-end p-4 bg-black bg-opacity-30">
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
