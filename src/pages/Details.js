import { useEffect, useState } from "react";
import { useFetch } from "../hooks";

import { useNavigate, useParams } from "react-router-dom";

import { ArrowLeftIcon, StarSolidIcon } from "../components/icons";
import {
  CreditsList,
  Recommended,
  Reviews,
  Videos,
} from "../components/details";
import { convertMinsToHrsMins, modifyDate } from "../utils/time";

const Details = ({ type }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useFetch(`${type}/${id}?language=en-US&`);
  const credits = useFetch(`${type}/${id}/credits?language=en-US&`);
  const reviews = useFetch(`${type}/${id}/reviews?language=en-US&`, "results");
  const recommended = useFetch(
    `${type}/${id}/recommendations?language=en-US&`,
    "results"
  );
  const videos = useFetch(`${type}/${id}/videos?language=en-US&`, "results");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && credits && reviews && recommended && videos) {
      setLoading(false);
      console.log("fetched");
    }
  }, [data, credits, reviews, recommended, videos]);

  return (
    <>
      {loading ? (
        ""
      ) : (
        <main className="relative flex flex-col items-center scrollbar h-screen pt-20 lg:pt-40 pb-16 lg:px-20 2xl:px-48 overflow-auto">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-10 lg:top-16 left-10 md:left-28 lg:left-20 2xl:left-48 flex items-center w-10 h-10 pl-2.5 bg-gray-300 dark:bg-neutral-800 rounded-full"
          >
            <ArrowLeftIcon className="w-4 h-4 icon" />
          </button>
          <div className="flex flex-col lg:flex-row gap-10 md:gap-20 lg:gap-6 items-center lg:items-start w-full lg:px-0 mt-10">
            <div className="relative z-20 w-[60%] lg:min-w-[200px] max-w-[340px] lg:max-w-[200px] rounded-2xl">
              <div className="absolute z-[-1] rounded-2xl bg-gray-300 dark:bg-neutral-700 w-[95%] h-[103%] top-0 left-1/2 -translate-x-1/2"></div>
              <div className="absolute z-[-2] rounded-2xl bg-gray-200 dark:bg-neutral-800 w-[90%] h-[106%] top-0 left-1/2 -translate-x-1/2"></div>
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt="backdrop"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="w-full px-10 md:px-28 lg:px-0 lg:mt-2">
              <h1 className="text-xl md:text-3xl font-medium">
                {data.title ?? data.name}
              </h1>
              <h3 className="text-neutral-700 dark:text-neutral-400 mt-1">
                {data.tagline}
              </h3>
              <div className="flex gap-1 items-center mt-1.5 md:mt-3">
                <StarSolidIcon className="w-3 h-3 md:w-5 md:h-5 rating-icon" />
                <span className="text-sm md:text-base pt-[1px]">
                  {data.vote_average.toFixed(1)}
                </span>
              </div>
              <div className="mt-2 md:mt-4">
              {type !== "tv" && (
                <div className="flex flex-row gap-2 items-center lg:items-start">
                  <h4 className="font-medium">Runtime:</h4>
                  <p className="text-neutral-500 mt-1">
                    {convertMinsToHrsMins(data.runtime)}
                  </p>
                </div>
              )}
              <div className="flex flex-row gap-2 items-center lg:items-start">
                <h4 className="font-medium">Release Date:</h4>
                <p className="text-neutral-500 mt-1">
                  {modifyDate(type === "movie" ? data.release_date : data.first_air_date)}
                </p>
              </div>

              </div>

              <div className="flex flex-wrap gap-2 mt-2 md:mt-4">
                {data.genres.map((genre) => (
                  <div
                    key={genre.id}
                    className="text-sm py-1 px-3 bg-gray-200 dark:bg-neutral-800 rounded-3xl"
                  >
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 w-full mt-5 md:mt-8 lg:mt-16 lg:px-0">
            <div className="overflow-hidden">
              <div className="px-10 md:px-28 lg:px-0">
                <h4 className="font-medium">Synopsis</h4>
                <p className="max-w-sm xl:max-w-md text-neutral-500 mt-2 md:mt-5">
                  {data.overview}
                </p>
              </div>

              <div className="flex flex-col gap-3 md:gap-5 mt-4 md:mt-8">
                <CreditsList data={credits.cast} heading="cast" />
                <CreditsList data={credits.crew} heading="crew" />
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:min-w-[400px] xl:min-w-[500px] max-w-[500px]">
              {reviews.length !== 0 && <Reviews data={reviews} />}
              {recommended.length !== 0 && <Recommended data={recommended} />}
              {<Videos data={videos} backdrop={data.backdrop_path} />}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Details;
