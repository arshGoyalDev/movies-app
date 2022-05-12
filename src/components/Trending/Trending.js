import { useState, useEffect } from "react";
import { useFetch } from "../../hooks";

import { TrendingOrder, TrendingMobile } from "./";

const Trending = () => {
  const data = useFetch("trending/all/day?", "results");
  const movieGenresList = useFetch(
    "genre/movie/list?language=en-US&",
    "genres"
  );
  const tvGenresList = useFetch("genre/tv/list?language=en-US&", "genres");
  const [loading, setLoading] = useState(true);
  const [activeNum, setActiveNum] = useState(0);

  useEffect(() => {
    if (data && movieGenresList && tvGenresList) {
      setLoading(false);
      console.log(data[activeNum]);
    }
  }, [data, movieGenresList, tvGenresList, activeNum]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeNum === 19) {
        setActiveNum(0);
      } else {
        setActiveNum(activeNum + 1);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeNum]);

  const getGenres = (genresList, id) => {
    return genresList.map((genreId) => {
      if (genreId.id === id) {
        return <p className="font-medium text-lg text-gray-200">{genreId.name}{data[activeNum].genre_ids.indexOf(id) === data[activeNum].genre_ids.length - 1 ? "" : ","}</p>
      }
    });

  }

  return (
    <>
      {loading ? (
        <div className="trending h-40 sm:h-60 lg:h-80 xl:h-96 mx-5 md:mx-16 xl:mr-24 xl:ml-10 bg-neutral-800 rounded-lg"></div>
      ) : (
        <>
          <div className="trending hidden sm:block relative h-40 sm:h-60 lg:h-80 xl:h-96 mx-5 md:mx-16 xl:mr-24 xl:ml-10 bg-neutral-800 rounded-lg lg:rounded-2xl overflow-hidden">
            <div className="absolute z-[1] w-full h-full">
              <img
                src={`https://image.tmdb.org/t/p/w500${data[activeNum].backdrop_path}`}
                alt="backdrop"
                className="w-full xl:w-[75%]"
              />
            </div>
            <div className="background absolute z-[2] flex items-end p-4 md:p-8 lg:p-12 w-full h-full text-white bg-black bg-opacity-50 xl:bg-opacity-20">
              <div className="w-full flex md:flex-col md:gap-4 xl:gap-6 items-end md:items-start justify-between">
                <div>
                  <h2 className="max-w-[160px] md:max-w-[360px] md:font-semibold md:text-2xl lg:text-3xl font-medium mb-2 xl:mb-0">
                    {(data[activeNum].title ?? data[activeNum].name).length > 25
                      ? (data[activeNum].title ?? data[activeNum].name).slice(
                          0,
                          25
                        ) + "..."
                      : data[activeNum].title ?? data[activeNum].name}
                  </h2>

                  <div className="flex items-center gap-2">
                    {data[activeNum].genre_ids.map((id) => {
                      if (data[activeNum].title) {
                        return getGenres(movieGenresList, id)
                      } else if (data[activeNum].name) {
                        return getGenres(tvGenresList, id)
                      }
                    })}
                  </div>
                </div>
                <button className="text-sm xl:text-base text-black font-bold py-1 md:py-0.5 lg:py-2 px-3 lg:px-5 bg-primary-light dark:bg-primary-dark hover:bg-[#FFB640] rounded transition-colors">
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
          <TrendingMobile
            data={data}
            activeNum={activeNum}
            setActiveNum={setActiveNum}
          />
        </>
      )}
    </>
  );
};

export default Trending;
