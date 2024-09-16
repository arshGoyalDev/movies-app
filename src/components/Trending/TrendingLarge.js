import { Genre } from "../genres";
import TrendingOrder from "./TrendingOrder";

import { useNavigate } from "react-router-dom";

const TrendingLarge = ({
  loading,
  data,
  activeNum,
  setActiveNum,
  movieGenresList,
  tvGenresList,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <div className="animate-skeleton trending hidden sm:block h-40 sm:h-72 lg:h-96 2xl:h-[600px] mx-5 md:mx-16 xl:mr-16 xl:ml-10 rounded-3xl"></div>
      ) : (
        <div className="trending hidden sm:block relative h-40 sm:h-72 lg:h-96 2xl:h-[600px] mx-5 md:mx-16 xl:mr-16 xl:ml-10 bg-neutral-800 rounded-2xl lg:rounded-3xl overflow-hidden">
          <div className="absolute z-[1] w-full h-full">
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${data[activeNum].backdrop_path}`}
              alt="backdrop"
              className="w-full h-full"
            />
          </div>
          <div className="background absolute z-[2] flex items-end p-10 md:p-8 lg:p-12 2xl:p-20 w-full h-full text-white bg-black xl:bg-opacity-0 dark:bg-opacity-20">
            <div className="w-full flex md:flex-col md:gap-4 xl:gap-4 items-end md:items-start justify-between">
              <div>
                <h2 className="max-w-[300px] md:max-w-[500px] md:font-semibold text-3xl lg:text-[2.5rem] font-medium">
                  {(data[activeNum].title ?? data[activeNum].name).length > 25
                    ? (data[activeNum].title ?? data[activeNum].name).slice(
                        0,
                        30
                      ) + "..."
                    : data[activeNum].title ?? data[activeNum].name}
                </h2>

                <div className="max-w-[420px] lg:max-w-[330px] 2xl:max-w-[540px] overflow-hidden flex flex-wrap items-center gap-2 mt-4 lg:mt-6">
                  <p className="text-neutral-100 lg:hidden">{data[activeNum].overview.slice(0, 80) + "..."}</p>
                  <p className="text-neutral-100 hidden lg:block 2xl:hidden">{data[activeNum].overview.slice(0, 120) + "..."}</p>
                  <p className="text-neutral-100 hidden 2xl:block">{data[activeNum].overview.slice(0, 180) + "..."}</p>
                  {/* <p className="text-neutral-100">{data[activeNum].overview.slice(0, 150) + "..."}</p>
                  <p className="text-neutral-100">{data[activeNum].overview.slice(0, 150) + "..."}</p> */}
                  {/* <p className="text-neutral-100">{data[activeNum].overview.slice(0, 150) + "..."}</p> */}

                </div>
              </div>
              <button
                onClick={() =>
                  data[activeNum].title
                    ? navigate(`/movies/${data[activeNum].id}`)
                    : navigate(`/tv-shows/${data[activeNum].id}`)
                }
                className="text-sm xl:text-base text-white font-bold py-2 px-2 bg-black bg-opacity-60 backdrop-blur-lg rounded-lg transition-colors"
              >
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

export default TrendingLarge;
