import { useState, useEffect } from "react";
import { useFetch } from "../../hooks";

import { TrendingMobile, TrendingLarge } from "./";

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
        return (
          <p key={id} className="font-medium text-gray-200">
            {genreId.name}
            {data[activeNum].genre_ids.indexOf(id) ===
            data[activeNum].genre_ids.length - 1
              ? ""
              : ","}
          </p>
        );
      }
    });
  };

  return (
    <>
      <TrendingLarge
        loading={loading}
        data={data}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
        getGenres={getGenres}
        movieGenresList={movieGenresList}
        tvGenresList={tvGenresList}
      />

      <TrendingMobile
        loading={loading}
        data={data}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
      />
    </>
  );
};

export default Trending;
