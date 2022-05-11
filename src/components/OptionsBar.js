import { Link } from "react-router-dom";

const OptionsBar = () => {
  return (
    <div className="xl:hidden flex gap-3 px-5 md:px-16 xl:pr-24 xl:pl-10 overflow-x-auto mb-7">
      <Link to="/genres">
        <p className="text-sm min-w-[80px] text-center py-1 px-3 bg-gray-200 dark:bg-neutral-800 rounded-full">
          Genres
        </p>
      </Link>
      <Link to="/upcoming">
        <p className="text-sm min-w-[100px] text-center py-1 px-3 bg-gray-200 dark:bg-neutral-800 rounded-full">
          Upcoming
        </p>
      </Link>
      <Link to="/top-rated">
        <p className="text-sm min-w-[110px] text-center py-1 px-3 bg-gray-200 dark:bg-neutral-800 rounded-full">
          Top Rated
        </p>
      </Link>
    </div>
  );
};

export default OptionsBar;
