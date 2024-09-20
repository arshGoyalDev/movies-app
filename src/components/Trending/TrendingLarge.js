import {useNavigate} from "react-router-dom";

import {ImageIcon} from "../icons";

const TrendingLarge = ({loading, data, activeNum, setActiveNum}) => {
  const navigate = useNavigate();

  return (
    <div className="relative hidden sm:block h-[90vw] md:h-[74vw] xl:h-[55vw] mt-10 overflow-hidden">
      {loading ? (
        <>
          <div
            className="animate-skeleton absolute -translate-x-[75%] translate-y-[10vw] min-w-[300px] h-[440px] -rotate-6 rounded-2xl"></div>
          <div className="animate-skeleton absolute left-1/2 -translate-x-1/2 w-[80%] h-[39vw] rounded-2xl"></div>
          <div
            className="animate-skeleton absolute top-[41vw] left-1/2 -translate-x-1/2 min-w-[360px] h-12 rounded-md"></div>
          <div
            className="animate-skeleton absolute right-0 translate-x-[75%] translate-y-[10vw] min-w-[300px] h-[440px] rotate-6 rounded-2xl"></div>
        </>
      ) : (
        <>
          <div
            onClick={() => setActiveNum(activeNum !== 0 ? activeNum - 1 : 15)}
            className="absolute -translate-x-[80%] translate-y-[10vw] min-w-[240px] 2xl:min-w-[300px] h-max -rotate-6 rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="w-full h-[320px]  2xl:h-[440px] opacity-80 dark:opacity-70 bg-gray-100 dark:bg-neutral-900">
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
            className="w-[80%] absolute left-1/2 -translate-x-1/2 h-max cursor-pointer"
          >
            <div
              className="w-full grid place-content-center bg-gray-50 dark:bg-neutral-900 rounded-3xl overflow-hidden">
              {data[activeNum].backdrop_path ? (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${data[activeNum]?.backdrop_path}`}
                  alt={data[activeNum].title ?? data[activeNum].name}
                  className="w-full h-full"
                />
              ) : (
                <div className="h-[39vw] grid place-content-center">
                  <ImageIcon className="icon w-20 h-20"/>
                </div>
              )}
            </div>

            <div className="mt-16 flex flex-col items-center justify-center">
              <h2 className="text-5xl text-center font-semibold mx-auto">
                {data[activeNum].title ?? data[activeNum].name}
              </h2>
              <p className="text-center dark:text-neutral-300 w-[50vw] max-w-[720px] mt-4">
                {data[activeNum].overview}
              </p>
            </div>
          </div>

          <div
            onClick={() => setActiveNum(activeNum !== 15 ? activeNum + 1 : 0)}
            className="absolute right-0 translate-x-[80%] translate-y-[10vw] min-w-[240px] 2xl:min-w-[300px] h-max rotate-6 rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="w-full h-[320px] 2xl:h-[440px] opacity-80 dark:opacity-70 bg-gray-100 dark:bg-neutral-900">
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

export default TrendingLarge;
