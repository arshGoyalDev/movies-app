import { useEffect, useState } from "react";
import { useFetch } from "../hooks";

import { useNavigate, useParams } from "react-router-dom";

import { modifyDate } from "../utils/time";

import { ArrowLeftIcon } from "../components/icons";

import { ImagesList, PersonCredits } from "../components/details";

const PersonDetails = () => {
  const { personId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const data = useFetch(`person/${personId}?language=en-US&`);
  const personImages = useFetch(`person/${personId}/images?`, "profiles");
  const movieCredits = useFetch(
    `person/${personId}/movie_credits?language=en-US&`
  );
  const tvCredits = useFetch(`person/${personId}/tv_credits?language=en-US&`);

  useEffect(() => {
    if (!(data && personImages && movieCredits && tvCredits)) return;

    setLoading(false);
  }, [data, personImages, movieCredits, tvCredits]);

  return (
    <>
      {loading ? (
        <div className="h-screen grid place-items-center">
          <div className="w-64 h-64 border-t-2 border-solid border-neutral-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        <main className="relative flex flex-col items-center h-screen pt-20 lg:pt-40 pb-40 lg:pb-72 lg:px-20 2xl:px-48 overflow-auto">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-10 lg:top-16 left-10 md:left-28 lg:left-20 2xl:left-48 flex items-center w-10 h-10 pl-2.5 bg-gray-200 dark:bg-neutral-800 rounded-full"
          >
            <ArrowLeftIcon className="w-4 h-4 icon" />
          </button>
          <div className="flex flex-col lg:flex-row gap-10 md:gap-20 lg:gap-6 items-center lg:items-start w-full lg:px-0 mt-10">
            <div className="relative z-20 w-[60%] lg:min-w-[200px] max-w-[340px] lg:max-w-[200px] rounded-2xl">
              <div className="absolute z-[-1] rounded-2xl bg-gray-300 dark:bg-neutral-700 w-[95%] h-[103%] top-0 left-1/2 -translate-x-1/2"></div>
              <div className="absolute z-[-2] rounded-2xl bg-gray-200 dark:bg-neutral-800 w-[90%] h-[106%] top-0 left-1/2 -translate-x-1/2"></div>
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                alt="backdrop"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="w-full px-10 md:px-28 lg:px-0 lg:mt-2">
              <h1 className="text-xl md:text-3xl font-medium">{data.name}</h1>
              <div className="mt-2 md:mt-4">
                <div className="flex flex-row gap-2 items-center lg:items-start">
                  <h4 className="font-medium">Known For:</h4>
                  <p className="text-neutral-500 mt-1">
                    {data.known_for_department}
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center lg:items-start">
                  <h4 className="font-medium">Popularity:</h4>
                  <p className="text-neutral-500 mt-1">
                    {data.popularity.toFixed(1)}
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center lg:items-start">
                  <h4 className="font-medium">Birthday:</h4>
                  <p className="text-neutral-500 mt-1">
                    {modifyDate(data.birthday)}
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center lg:items-start">
                  <h4 className="font-medium">Birth Place:</h4>
                  <p className="text-neutral-500 mt-1">{data.place_of_birth}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 w-full mt-7 md:mt-10 lg:mt-16 lg:px-0">
            <div className="w-full overflow-hidden">
              <div className="px-10 md:px-28 lg:px-0">
                <h4 className="font-medium">Biography</h4>
                <p className="max-w-lg xl:max-w-2xl text-neutral-500 mt-2 md:mt-5">
                  {data.biography}
                </p>
              </div>

              <div className="flex flex-col gap-3 md:gap-5 mt-4 md:mt-8">
                <ImagesList imagesList={personImages} />
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full lg:min-w-[400px] xl:min-w-[500px] xl:max-w-[500px] 2xl:min-w-[600px] 2xl:max-w-[600px]">
              <PersonCredits
                castCredits={
                  movieCredits.cast.length !== 0 ? movieCredits.cast : null
                }
                crewCredits={
                  movieCredits.crew.length !== 0 ? movieCredits.crew : null
                }
                title="Movies"
              />
              <PersonCredits
                castCredits={
                  tvCredits.cast.length !== 0 ? tvCredits.cast : null
                }
                crewCredits={
                  tvCredits.crew.length !== 0 ? tvCredits.crew : null
                }
                title="Tv Shows"
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default PersonDetails;
