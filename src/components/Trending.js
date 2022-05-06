import { useState, useEffect } from "react";
import { useFetch } from "../hooks";
import Rating from "./Rating";
import TrendingOrder from "./TrendingOrder";

const Trending = () => {
  const data = useFetch("trending/all/day", "results");
  const [loading, setLoading] = useState(true);
  const [activeNum, setActiveNum] = useState(0);

  useEffect(() => {
    if (data) {
      setLoading(false);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeNum === 19) {
        setActiveNum(0);
      } else {
        setActiveNum(activeNum + 1);
      }
    }, 4000);

    return () => clearTimeout(timeout);
  }, [activeNum]);

  return (
    <>
      {loading ? (
        <div className="trending h-40 sm:h-60 lg:h-80 xl:h-96  bg-neutral-800 rounded-lg"></div>
      ) : (
        <div className="trending relative h-40 sm:h-60 lg:h-80 xl:h-96 bg-neutral-800 rounded-lg lg:rounded-2xl overflow-hidden">
          <div className="absolute z-[1] w-full h-full">
            <img
              src={`https://image.tmdb.org/t/p/w500${data[activeNum].backdrop_path}`}
              alt="backdrop"
              className="w-full xl:w-[75%]"
            />
          </div>
          <div className="background absolute z-[2] flex items-end p-4 md:p-8 lg:p-12 w-full h-full text-white bg-black bg-opacity-50">
            <div className="w-full flex md:flex-col md:gap-4 xl:gap-6 items-end md:items-start justify-between">
              <div>
                <h2 className="max-w-[160px] md:max-w-[360px] md:font-semibold md:text-2xl lg:text-3xl font-medium mb-1 xl:mb-3">
                  {data[activeNum].title ?? data[activeNum].name}
                </h2>
                <Rating data={data[activeNum].vote_average} />
              </div>

              <button className="text-sm xl:text-base text-black font-bold py-1 md:py-0.5 lg:py-2 px-3 lg:px-5 bg-primary-light dark:bg-primary-dark rounded">
                More
              </button>
            </div>
            <TrendingOrder
              data={data}
              activeNum={activeNum}
              setActiveNum={setActiveNum}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Trending;
