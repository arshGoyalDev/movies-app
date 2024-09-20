import {useEffect, useState} from "react";
import {useFetch} from "../hooks";

import {Outlet, useLocation, useNavigate} from "react-router-dom";

import OptionsBar from "../components/OptionsBar";
import {GenresList} from "../components/genres";

const Genres = () => {
  const location = useLocation();
  const movieGenres = useFetch(`genre/movie/list?language=en-US&`, "genres");
  const tvGenres = useFetch(`genre/tv/list?language=en-US&`, "genres");

  const [loading, setLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState("");

  useEffect(() => {
    if (
      location.pathname.includes("movie") ||
      location.pathname.includes("tv")
    ) {
      const output = location.pathname.replace("/genres", "");

      setActiveGenre(output);
    }
  }, [location]);

  useEffect(() => {
    if (!(movieGenres && tvGenres)) return;

    setLoading(false);
  }, [movieGenres, tvGenres]);

  return (
    <div>
      <OptionsBar/>

      <div className="flex flex-col gap-8">
        <GenresList
          type="movie"
          list={movieGenres}
          loading={loading}
          activeGenre={activeGenre}
        />
        <GenresList
          type="tv"
          list={tvGenres}
          loading={loading}
          activeGenre={activeGenre}
        />
      </div>

      <Outlet/>
    </div>
  );
};

export default Genres;
