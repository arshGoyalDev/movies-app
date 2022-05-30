import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { SearchContext } from "../../context";

import { UserIcon } from "../icons";

const SearchPersonCard = ({ data }) => {
  const navigate = useNavigate();
  const { setSearch } = useContext(SearchContext);

  return (
    <div
      onClick={() => {
        navigate(`/people/${data.id}`);
        setSearch(false);
      }}
      className="relative min-w-[130px] h-44 bg-gray-100 dark:bg-neutral-700 rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="absolute z-[1] grid place-items-center w-full h-full">
        {data.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            className="w-full"
          />
        ) : (
          <UserIcon className="w-8 h-8 icon" />
        )}
      </div>
      <div
        className={`absolute z-[2] w-full h-full flex flex-col gap-2 justify-end p-2 bg-black ${
          data.profile_path ? "bg-opacity-40" : "bg-opacity-60"
        }`}
      >
        <div className="flex items-end py-2 px-3 bg-black bg-opacity-30 backdrop-blur-2xl rounded-lg">
          <h4 className="font-medium text-white break-words">
            {data.name.length > 15 ? `${data.name.slice(0, 15)}...` : data.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SearchPersonCard;
