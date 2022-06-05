import { Genre } from "../Genres";
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
        <div className="animate-skeleton trending hidden sm:block h-40 sm:h-72 lg:h-[420px] xl:h-96mx-5 md:mx-16 xl:mr-24 xl:ml-10 rounded-3xl"></div>
      ) : (
        <div className="trending hidden sm:block relative h-40 sm:h-72 lg:h-[420px] xl:h-96 mx-5 md:mx-16 xl:mr-24 xl:ml-10 bg-neutral-800 rounded-2xl lg:rounded-3xl overflow-hidden">
          <div className="absolute z-[1] w-full h-full">
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${data[activeNum].backdrop_path}`}
              alt="backdrop"
              className="w-full h-full lg:w-[75%]"
            />
          </div>
          <div className="background absolute z-[2] flex items-end p-4 md:p-8 lg:p-12 w-full h-full text-white bg-black bg-opacity-50 xl:bg-opacity-20">
            <div className="w-full flex md:flex-col md:gap-4 xl:gap-6 items-end md:items-start justify-between">
              <div>
                <h2 className="max-w-[160px] md:max-w-[500px] md:font-semibold md:text-3xl lg:text-[2.5rem] font-medium">
                  {(data[activeNum].title ?? data[activeNum].name).length > 25
                    ? (data[activeNum].title ?? data[activeNum].name).slice(
                        0,
                        25
                      ) + "..."
                    : data[activeNum].title ?? data[activeNum].name}
                </h2>

                <div className="max-w-lg flex flex-wrap items-center gap-2 mt-4">
                  {data[activeNum].genre_ids.map((id) =>
                    data[activeNum].title ? (
                      <Genre key={id} genreId={id} list={movieGenresList} />
                    ) : (
                      <Genre key={id} genreId={id} list={tvGenresList} />
                    )
                  )}
                </div>
              </div>
              <button
                onClick={() =>
                  data[activeNum].title
                    ? navigate(`/movies/${data[activeNum].id}`)
                    : navigate(`/tv-shows/${data[activeNum].id}`)
                }
                className="text-sm xl:text-base text-black font-bold py-2 px-5 bg-primary-light dark:bg-primary-dark hover:bg-[#FFB640] rounded transition-colors"
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
