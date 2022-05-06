import { useState, useEffect } from "react";
import { useFetch } from "../hooks";
import Rating from "./Rating";

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

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (activeNum === 19) {
  //       setActiveNum(0);
  //     } else {
  //       setActiveNum(activeNum + 1);
  //     }
  //   }, 4000);

  //   return () => clearTimeout(timeout);
  // }, [activeNum]);

  return (
    <div className="px-5 md:px-16 mt-6">
      {loading ? (
        <div className="h-40 sm:h-60 bg-neutral-800 rounded-lg"></div>
      ) : (
        <div className="relative h-40 sm:h-60 bg-neutral-800 rounded-lg overflow-hidden">
          <div className="absolute z-[1] w-full h-full pointer-events-none"> 
            <img src={`https://image.tmdb.org/t/p/w500${data[activeNum].backdrop_path}`} alt="backdrop" className="w-full" />
          </div>
          <div className="absolute z-[2] flex items-end p-4 md:p-8 w-full h-full text-white bg-black bg-opacity-50">
            <div className="w-full flex md:flex-col md:gap-4 items-end md:items-start justify-between">
              <div>
            <h2 className="max-w-[160px] md:max-w-[360px] md:text-2xl font-medium mb-1">{data[activeNum].title ?? data[activeNum].name}</h2>
              <Rating data={data[activeNum].vote_average} />
              </div>
              
              <button className="text-sm text-black font-bold py-1 md:py-0.5 px-3 bg-primary-light dark:bg-primary-dark rounded">More</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;
