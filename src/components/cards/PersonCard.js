import React from "react";
import { UserIcon } from "../icons";

const PersonCard = ({ data, type }) => {
  console.log(data);
  return (
    <div className="relative min-w-[120px] xl:min-w-[150px] h-40 xl:h-48 bg-gray-300 dark:bg-neutral-800 rounded-lg overflow-hidden">
      <div className="absolute z-[1] grid place-items-center w-full h-full">
        {data.profile_path ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            className="w-full"
          />
        ) : (
          <UserIcon className="w-10 h-10 icon" />
        )}
      </div>
      <div className="absolute z-[2] w-full h-full flex flex-col gap-2 justify-end p-2 bg-black bg-opacity-50">
        <div className="flex items-end py-2 px-3 bg-black bg-opacity-30 backdrop-blur-2xl rounded-lg">
          <h4 className="xl:hidden font-medium text-white break-words">
            {data.name.length > 15 ? `${data.name.slice(0, 15)}...` : data.name}
          </h4>
          <h4 className="hidden xl:block font-medium">
            {data.name.length > 25 ? `${data.name.slice(0, 25)}...` : data.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
