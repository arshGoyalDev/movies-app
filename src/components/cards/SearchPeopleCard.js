import { UserIcon } from "../icons";

const SearchPeopleCard = ({ data }) => {
  return (
    <div className="relative min-w-[130px] h-44 bg-gray-100 dark:bg-neutral-700 rounded-lg overflow-hidden">
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
      <div className="absolute z-[2] w-full h-full flex flex-col gap-2 justify-end p-2 bg-black bg-opacity-50">
        <div className="flex items-end py-2 px-3 bg-black bg-opacity-30 backdrop-blur-2xl rounded-lg">
          <h4 className="font-medium text-white break-words">
            {data.name.length > 15 ? `${data.name.slice(0, 15)}...` : data.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SearchPeopleCard;
