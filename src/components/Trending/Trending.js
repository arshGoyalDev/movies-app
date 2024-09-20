import {useState, useEffect} from "react";
import {useFetch} from "../../hooks";

import {TrendingMobile, TrendingLarge} from "./";

const Trending = ({type}) => {
  const data = useFetch(`trending/${type}/day?`, "results");
  const movieGenresList = useFetch(
    "genre/movie/list?language=en-US&",
    "genres"
  );
  const tvGenresList = useFetch("genre/tv/list?language=en-US&", "genres");
  const [loading, setLoading] = useState(true);
  const [activeNum, setActiveNum] = useState(0);

  useEffect(() => {
    if (!(data && movieGenresList && tvGenresList)) return;

    setLoading(false);
  }, [data, movieGenresList, tvGenresList]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeNum === 15) {
        setActiveNum(0);
      } else {
        setActiveNum(activeNum + 1);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeNum]);

  return (
    <div className="mb-6 md:mb-10">
      {/* <TrendingLarge
        loading={loading}
        data={data}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
        movieGenresList={movieGenresList}
        tvGenresList={tvGenresList}
      /> */}

      <TrendingLarge
        loading={loading}
        data={data}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
      />

      <TrendingMobile
        loading={loading}
        data={data}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
      />
    </div>
  );
};

export default Trending;
