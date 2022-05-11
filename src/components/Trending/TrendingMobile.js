import React from "react";

const TrendingMobile = ({ data, activeNum, setActiveNum }) => {
  // console.log(data[activeNum - 1].poster_path ?? data[19].poster_path);

  return (
    <div className="relative sm:hidden h-80 mt-10 overflow-hidden">
      <div
        onClick={() => setActiveNum(data[activeNum - 1] ? activeNum - 1 : 19)}
        className="absolute min-w-[180px] h-max rounded-xl -translate-x-[70%] -rotate-6 translate-y-16 overflow-hidden shadow-2xl dark:shadow-none shadow-gray-500"
      >
        <div className="w-full h-60 opacity-80 dark:opacity-70">
          <img
            src={`https://image.tmdb.org/t/p/w500${
              data[activeNum - 1]
                ? data[activeNum - 1].poster_path
                : data[19].poster_path
            }`}
            alt="backdrop"
            className="w-full h-full"
          />
        </div>
      </div>

      <div
        className={`absolute min-w-[180px] h-max rounded-xl left-1/2 -translate-x-1/2 overflow-hidden shadow-2xl dark:shadow-none shadow-gray-500 bg-neutral-800`}
      >
        <div className="w-full h-64">
          <img
            src={`https://image.tmdb.org/t/p/w500${data[activeNum].poster_path}`}
            alt="backdrop"
            className="w-full h-full"
          />
        </div>
      </div>

      <div
        onClick={() => setActiveNum(data[activeNum + 1] ? activeNum + 1 : 0)}
        className={`absolute min-w-[180px] h-max rounded-xl right-0 translate-x-[70%] rotate-6 translate-y-16 overflow-hidden shadow-2xl dark:shadow-none shadow-gray-500`}
      >
        <div className="w-full h-60 opacity-80 dark:opacity-70">
          <img
            src={`https://image.tmdb.org/t/p/w500${
              data[activeNum + 1]
                ? data[activeNum + 1].poster_path
                : data[0].poster_path
            }`}
            alt="backdrop"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingMobile;
