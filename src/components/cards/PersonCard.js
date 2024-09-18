import { Link } from "react-router-dom";

import { UserIcon } from "../icons";

const PersonCard = ({ data }) => {
  return (
    <Link
      to={`/people/${data.id}`}
      className="relative min-w-[120px] lg:min-w-[150px] h-40 lg:h-48 2xl:min-w-[170px] 2xl:h-60 bg-gray-200 dark:bg-neutral-900 rounded-lg xl:rounded-xl overflow-hidden cursor-pointer focus:outline-none"
    >
      <div className="absolute z-[1] grid place-items-center w-full h-full">
        {data.profile_path ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
            alt={data.name}
            className="w-full"
          />
        ) : (
          <UserIcon className="w-10 h-10 icon" />
        )}
      </div>
      <div
        className={`absolute z-[2] flex flex-col justify-end w-full h-full p-2 ${
          data.profile_path ? "bg-black" : ""
        } ${
          data.profile_path
            ? "bg-opacity-10 dark:bg-opacity-25"
            : "bg-opacity-60"
        }`}
      >
        <div className="flex items-end py-2 px-3 bg-black bg-opacity-30 backdrop-blur-2xl rounded-lg">
          <h4 className="lg:hidden font-medium text-white break-words">
            {data.name.length > 15 ? `${data.name.slice(0, 15)}...` : data.name}
          </h4>
          <h4 className="hidden lg:block font-medium text-white break-words">
            {data.name.length > 25 ? `${data.name.slice(0, 25)}...` : data.name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;
