import { UserIcon } from "../icons";

const SearchPeopleCard = ({ data }) => {
  console.log(data);
  return (
    <div className="relative min-w-[130px] h-44 bg-gray-300 dark:bg-neutral-700 rounded-lg overflow-hidden">
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
      <div className="absolute z-[2] w-full h-full flex items-end p-4 bg-black bg-opacity-30">
        <p className="text-white font-medium">{data.name}</p>
      </div>
    </div>
  );
};

export default SearchPeopleCard;
