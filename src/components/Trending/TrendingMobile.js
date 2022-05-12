import React from "react";

const TrendingMobile = ({ data, activeNum, setActiveNum }) => {
  // console.log(data[activeNum - 1].poster_path ?? data[19].poster_path);

  return (
    <div className="relative sm:hidden h-[430px] mt-10 overflow-hidden">
      <div
        onClick={() => setActiveNum(data[activeNum - 1] ? activeNum - 1 : 19)}
        className="absolute -translate-x-[75%] translate-y-16 min-w-[200px] h-max -rotate-6 rounded-2xl overflow-hidden"
      >
        <div className="w-full h-[300px] opacity-80 dark:opacity-70">
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

      <div className="absolute left-1/2 -translate-x-1/2 min-w-[220px] h-max">
        <div className="w-full h-80 rounded-2xl shadow-2xl shadow-gray-700 dark:shadow-neutral-700 overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${data[activeNum].poster_path}`}
            alt="backdrop"
            className="w-full h-full"
          />
        </div>

        <div className="mt-4">
          <h3 className="max-w-[200px] text-lg text-center font-semibold mx-auto">{(data[activeNum].title ?? data[activeNum].name).length > 30 ? (data[activeNum].title ?? data[activeNum].name).slice(0, 30) + "..." : data[activeNum].title ?? data[activeNum].name}</h3>
        </div>
      </div>

      <div
        onClick={() => setActiveNum(data[activeNum + 1] ? activeNum + 1 : 0)}
        className="absolute right-0 translate-x-[75%] translate-y-16 min-w-[200px] h-max rotate-6 rounded-2xl overflow-hidden"
      >
        <div className="w-full h-[300px] opacity-80 dark:opacity-70">
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
