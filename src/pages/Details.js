import { useEffect, useState } from "react";
import { useFetch } from "../hooks";

import { useNavigate, useParams } from "react-router-dom";

import { StarSolidIcon, ArrowLeftIcon } from "../components/icons";

const Details = ({ type }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useFetch(`${type}/${id}?language=en-US&`);
  const credits = useFetch(`${type}/${id}/credits?language=en-US&`);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!data && !credits) return;

    setLoading(false);
  }, [data]);

  return (
    <>
      {loading ? (
        ""
      ) : (
        <main className="pt-6">
          <button
            onClick={() => navigate(-1)}
            className="grid place-items-center w-8 h-8 mx-5 rounded-full"
          >
            <ArrowLeftIcon className="icon w-4 h-4" />
          </button>

          <div className="flex flex-col gap-10 items-center mt-10">
            <div className="relative z-20 w-[60%] rounded-2xl">
              <div className="absolute z-[-1] rounded-2xl bg-gray-300 dark:bg-neutral-700 w-[95%] h-[103%] top-0 left-1/2 -translate-x-1/2"></div>
              <div className="absolute z-[-2] rounded-2xl bg-gray-200 dark:bg-neutral-800 w-[90%] h-[106%] top-0 left-1/2 -translate-x-1/2"></div>
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt="backdrop"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-full px-10">
              <h1 className="text-xl font-medium">{data.title ?? data.name}</h1>
              <div className="flex gap-1 items-center mt-1.5">
                <StarSolidIcon className="w-3 h-3 rating-icon" />

                <span className="text-sm pt-[1px]">
                  {data.vote_average.toFixed(1)}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.genres.map((genre) => (
                  <div className="text-sm py-1 px-3 bg-gray-200 dark:bg-neutral-800 rounded-3xl">
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-10 mt-5">
            <div>
              <div>
                <h4 className="font-medium">Synopsis</h4>
                <p className="text-neutral-500 mt-2">{data.overview}</p>
              </div>

              <div></div>
            </div>
            <div>hdks</div>
          </div>
        </main>
      )}
    </>
  );
};

export default Details;
