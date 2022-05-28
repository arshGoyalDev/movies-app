const TrendingMobile = ({ loading, data, activeNum, setActiveNum, type }) => {
  return (
    <div className="relative sm:hidden h-[430px] mt-10 overflow-hidden">
      {loading ? (
        <>
          <div className="animate-skeleton absolute -translate-x-[75%] translate-y-16 min-w-[200px] h-[300px] -rotate-6 rounded-2xl"></div>
          <div className="animate-skeleton absolute left-1/2 -translate-x-1/2 min-w-[220px] h-80 rounded-2xl"></div>
          <div className="animate-skeleton absolute top-[336px] left-1/2 -translate-x-1/2 min-w-[200px] h-6 rounded-md"></div>
          <div className="animate-skeleton absolute right-0 translate-x-[75%] translate-y-16 min-w-[200px] h-[300px] rotate-6 rounded-2xl"></div>
        </>
      ) : (
        <>
          <div
            onClick={() => setActiveNum(activeNum !== 0 ? activeNum - 1 : 19)}
            className="absolute -translate-x-[75%] translate-y-16 min-w-[200px] h-max -rotate-6 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-[300px] opacity-80 dark:opacity-70 bg-gray-200 dark:bg-neutral-800">
              <img
                loading="lazy"
                src={
                  type !== "people"
                    ? `https://image.tmdb.org/t/p/w500${
                        activeNum !== 0
                          ? data[activeNum - 1]?.poster_path
                          : data[19]?.poster_path
                      }`
                    : `https://image.tmdb.org/t/p/w500${
                        activeNum !== 0
                          ? data[activeNum - 1]?.profile_path
                          : data[19]?.profile_path
                      }`
                }
                alt={type !== "people" ? "backdrop" : "picture"}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 min-w-[220px] h-max">
            <div className="w-full h-80 bg-neutral-200 dark:bg-neutral-800 rounded-2xl shadow-2xl shadow-gray-400 dark:shadow-neutral-00 overflow-hidden">
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${
                  type !== "people"
                    ? data[activeNum]?.poster_path
                    : data[activeNum]?.profile_path
                }`}
                alt={data[activeNum].title ?? data[activeNum].name}
                className="w-full h-full"
              />
            </div>

            <div className="mt-4">
              <h3 className="max-w-[200px] text-lg text-center font-semibold mx-auto">
                {(data[activeNum].title ?? data[activeNum].name).length > 30
                  ? (data[activeNum].title ?? data[activeNum].name).slice(
                      0,
                      30
                    ) + "..."
                  : data[activeNum].title ?? data[activeNum].name}
              </h3>
            </div>
          </div>

          <div
            onClick={() => setActiveNum(activeNum !== 19 ? activeNum + 1 : 0)}
            className="absolute right-0 translate-x-[75%] translate-y-16 min-w-[200px] h-max rotate-6 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-[300px] opacity-80 dark:opacity-70 bg-gray-200 dark:bg-neutral-800">
              <img
                loading="lazy"
                src={
                  type !== "people"
                    ? `https://image.tmdb.org/t/p/w500${
                        activeNum !== 19
                          ? data[activeNum + 1]?.poster_path
                          : data[0]?.poster_path
                      }`
                    : `https://image.tmdb.org/t/p/w500${
                        activeNum !== 19
                          ? data[activeNum + 1]?.profile_path
                          : data[0]?.profile_path
                      }`
                }
                alt={
                  activeNum !== 0
                    ? data[activeNum + 1].title ?? data[activeNum + 1].name
                    : data[activeNum].title ?? data[activeNum].name
                }
                className="w-full h-full"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TrendingMobile;
