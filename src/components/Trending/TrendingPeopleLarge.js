import { useNavigate } from "react-router-dom";

import { SearchBackdropCard } from "../cards";

import { UserIcon } from "../icons";

const TrendingPeopleLarge = ({ loading, data, activeNum }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden sm:block">
      {loading ? (
        <div className="animate-skeleton trending hidden sm:block h-40 sm:h-72 lg:h-96 2xl:h-[600px] mx-5 md:mx-16 xl:mr-16 xl:ml-10 rounded-3xl"></div>
      ) : (
        <>
          <div className="hidden sm:flex items-center h-40 sm:h-72 lg:h-96 2xl:h-[600px] mx-5 md:mx-16 xl:mr-16 xl:ml-10 bg-gray-50 dark:bg-neutral-900 rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="grid place-items-center h-full min-w-[192px] max-w-[192px] lg:min-w-[280px] lg:max-w-[280px] 2xl:w-[400px] 2xl:max-w-[400px] bg-gray-100 dark:bg-neutral-800">
              {data[activeNum].profile_path ? (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${data[activeNum].profile_path}`}
                  alt="backdrop"
                  className="h-full"
                />
              ) : (
                <UserIcon className="w-20 h-20 icon" />
              )}
            </div>
            <div className="trending-people-info px-8 lg:px-14">
              <h1 className="lg:text-3xl 2xl:text-5xl font-bold">
                {data[activeNum].name}
              </h1>
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex gap-3 items-center">
                  <h3 className="font-bold text-gray-300 dark:text-neutral-700">
                    Known For
                  </h3>
                  <span className="font-medium">
                    {data[activeNum].known_for_department}
                  </span>
                </div>
              </div>

              <div className="hidden lg:block mt-5">
                <div className="flex gap-3 w-full pr-10 mt-3 overflow-auto">
                  {data[activeNum].known_for.map((item) => (
                    <SearchBackdropCard key={item.id} data={item} />
                  ))}
                </div>
              </div>

              <button
                onClick={() => navigate(`/people/${data[activeNum].id}`)}
                className="text-sm xl:text-base font-bold py-2 px-4 bg-black bg-opacity-5 dark:bg-opacity-20 backdrop-blur-md rounded mt-4 transition-colors"
              >
                More
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TrendingPeopleLarge;
