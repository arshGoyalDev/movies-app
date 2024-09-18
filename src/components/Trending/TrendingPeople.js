import { useEffect, useState } from "react";

import { useFetch } from "../../hooks";

import { useNavigate } from "react-router-dom";

import { UserIcon } from "../icons";

const TrendingPeople = () => {
  const data = useFetch(`trending/person/day?`, "results");

  const [loading, setLoading] = useState(true);
  const [activeNum, setActiveNum] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!data) return;

    setLoading(false);
  }, [data]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeNum === 15) {
        setActiveNum(0);
      } else {
        setActiveNum(activeNum + 1);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeNum]);

  return (
    <div className="relative h-[430px] sm:h-[60vw] md:h-[63vw] lg:h-[55vw] xl:h-[55vw] mt-10 overflow-hidden">
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
            className="absolute -translate-x-[80%] translate-y-[10vw] min-w-[200px] sm:min-w-[240px] 2xl:min-w-[300px] h-max -rotate-6 rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="w-full h-[300px] sm:h-[320px]  2xl:h-[440px] opacity-80 dark:opacity-70 bg-gray-100 dark:bg-neutral-900">
              {(activeNum !== 0
                ? data[activeNum - 1]?.profile_path
                : data[15]?.profile_path) && (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${
                    activeNum !== 0
                      ? data[activeNum - 1]?.profile_path
                      : data[15]?.profile_path
                  }`}
                  alt={
                    activeNum !== 0 ? data[activeNum - 1]?.name : data[15]?.name
                  }
                  className="w-full h-full"
                />
              )}
            </div>
          </div>

          <div
            onClick={() => {
              navigate(`/people/${data[activeNum].id}`);
            }}
            className="absolute left-1/2 -translate-x-1/2 min-w-[220px] sm:w-[28vw] h-max"
          >
            <div className="w-full grid place-content-center h-[320px] sm:h-[40vw] bg-neutral-200 dark:bg-neutral-900 rounded-2xl overflow-hidden">
              {data[activeNum].profile_path ? (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w1280${data[activeNum].profile_path}`}
                  alt="backdrop"
                  className="w-full h-full"
                />
              ) : (
                <UserIcon className="w-28 h-28 icon" />
              )}
            </div>

            <div className="mt-12">
              <h2 className="max-w-[600px] text-2xl 2xl:text-4xl text-center font-semibold mx-auto">
                {data[activeNum].name.length > 30
                  ? data[activeNum].name.slice(0, 30) + "..."
                  : data[activeNum].name}
              </h2>
            </div>
          </div>

          <div
            onClick={() => setActiveNum(activeNum !== 15 ? activeNum + 1 : 0)}
            className="absolute right-0 translate-x-[80%] translate-y-[10vw] min-w-[200px] sm:min-w-[240px] 2xl:min-w-[300px] h-max rotate-6 rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="w-full h-[300px] sm:h-[320px] 2xl:h-[440px] opacity-80 dark:opacity-70 bg-gray-100 dark:bg-neutral-900">
              {(activeNum !== 15
                ? data[activeNum + 1]?.profile_path
                : data[0]?.profile_path) && (
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${
                    activeNum !== 15
                      ? data[activeNum + 1]?.profile_path
                      : data[0]?.profile_path
                  }`}
                  alt={
                    activeNum !== 15 ? data[activeNum + 1]?.name : data[0]?.name
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

export default TrendingPeople;
