import { Outlet, useLocation } from "react-router-dom";

import Trending from "../components/Trending";
import OptionsBar from "../components/OptionsBar";
import List from "../components/List";

const Movies = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("/movies/") ? (
        <Outlet />
      ) : (
        <div>
          <OptionsBar />
          <Trending type="movie" />

          <div className="flex flex-col gap-8">
            <List type="movie" query="now_playing" />
            <List type="movie" query="popular" />
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
