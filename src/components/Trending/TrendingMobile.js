import { useNavigate } from "react-router-dom";

import { ImageIcon } from "../icons";

const TrendingMobile = ({ loading, data, activeNum, setActiveNum, type }) => {
  const navigate = useNavigate();

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
            onClick={() => setActiveNum(activeNum !== 0 ? activeNum - 1 : 15)}
            className="absolute -translate-x-[75%] translate-y-16 min-w-[200px] h-max -rotate-6 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-[300px] opacity-80 dark:opacity-70 bg-gray-100 dark:bg-neutral-900">
              {(activeNum !== 0
                ? data[activeNum - 1]?.poster_path
                : data[15]?.poster_path) && (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${
                    activeNum !== 0
                      ? data[activeNum - 1]?.poster_path
                      : data[15]?.poster_path
                  }`}
                  alt={
                    activeNum !== 0
                      ? data[activeNum - 1]?.title ?? data[activeNum - 1]?.name
                      : data[15]?.title ?? data[15]?.name
                  }
                  className="w-full h-full"
                />
              )}
            </div>
          </div>

          <div
            onClick={() => {
              data[activeNum].title
                ? navigate(`/movies/${data[activeNum].id}`)
                : navigate(`/tv-shows/${data[activeNum].id}`);
            }}
            className="absolute left-1/2 -translate-x-1/2 min-w-[220px] h-max"
          >
            <div className="w-full grid place-content-center h-80 bg-neutral-200 dark:bg-neutral-900 rounded-2xl shadow-2xl shadow-gray-300 dark:shadow-neutral-900 overflow-hidden">
              {data[activeNum].backdrop_path ? (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${data[activeNum]?.poster_path}`}
                  alt={data[activeNum].title ?? data[activeNum].name}
                  className="w-full h-full"
                />
              ) : (
                <div className="h-[39vw] grid place-content-center">
                  <ImageIcon className="icon w-20 h-20" />
                </div>
              )}
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
            onClick={() => setActiveNum(activeNum !== 15 ? activeNum + 1 : 0)}
            className="absolute right-0 translate-x-[75%] translate-y-16 min-w-[200px] h-max rotate-6 rounded-2xl overflow-hidden"
          >
            <div className="w-full h-[300px] opacity-80 dark:opacity-70 bg-gray-100 dark:bg-neutral-900">
              {(activeNum !== 15
                ? data[activeNum + 1]?.poster_path
                : data[0]?.poster_path) && (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${
                    activeNum !== 15
                      ? data[activeNum + 1]?.poster_path
                      : data[0]?.poster_path
                  }`}
                  alt={
                    activeNum !== 15
                      ? data[activeNum + 1]?.title ?? data[activeNum + 1]?.name
                      : data[0]?.title ?? data[0]?.name
                  }
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TrendingMobile;
