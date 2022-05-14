import React from "react";
import { UserIcon } from "../icons";

const PersonCard = ({ data }) => {
  console.log(data);
  return (
    <div className="relative min-w-[112px] xl:min-w-[140px] h-40 xl:h-48 bg-gray-300 dark:bg-neutral-800 rounded-lg overflow-hidden">
      <div className="absolute z-[1] grid place-items-center w-full h-full">
        {data.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            className="w-full"
          />
        ) : (
          <UserIcon className="w-10 h-10 icon" />
        )}
      </div>
      <div className="absolute z-[2] w-full h-full grid place-items-center p-2 bg-black bg-opacity-50">
        <div className="h-full w-full flex items-end p-2 border-2 border-solid border-gray-300 rounded-lg">
          <h4 className="xl:hidden text font-medium text-white">
            {data.name.length > 10 ? `${data.name.slice(0, 10)}...` : data.name}
          </h4>
          <h4 className="hidden xl:block text font-medium text-white">
            {data.name.length > 20 ? `${data.name.slice(0, 20)}...` : data.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
