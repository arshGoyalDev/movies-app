import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import { PosterCard } from "../cards";

const GenreResults = () => {
  const { type, genreId } = useParams();
  const data = useFetch(
    `discover/${type}?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_ty\pes=flatrate&`,
    "results"
  );
  const [loading, setLoading] = useState(true);

  const loadingArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  useEffect(() => {
    setLoading(true);
  }, [genreId]);

  useEffect(() => {
    if (!data) return;

    setLoading(false);
    console.log(data);

    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      {loading ? (
        <div className="mt-10 px-6 md:px-16 xl:pr-24 xl:pl-10">
          <div className="w-52 h-6 rounded-md animate-skeleton"></div>
          <div className="flex flex-wrap gap-3 mt-5">
            {loadingArray.map((item) => (
              <div
                key={item}
                className="relative min-w-[150px] sm:min-w-[170px] h-56 sm:h-60 rounded-xl animate-skeleton"
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10 px-6 md:px-16 xl:pr-24 xl:pl-10">
          <h2 className="text-xl capitalize font-medium">
            {type === "movie" ? "movies" : "tv shows"}
          </h2>

          <div className="flex flex-wrap gap-5 mt-5">
            {data.map((item) => (
              <PosterCard data={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GenreResults;
