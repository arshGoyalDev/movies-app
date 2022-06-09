import { Outlet, useLocation } from "react-router-dom";

import Trending from "../components/Trending";
import OptionsBar from "../components/OptionsBar";
import List from "../components/List";

const TvShows = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("/tv-shows/") ? (
        <Outlet />
      ) : (
        <div>
          <OptionsBar />
          <Trending type="tv" />

          <div className="flex flex-col gap-8">
            <List type="tv" query="on_the_air" />
            <List type="tv" query="popular" />
          </div>
        </div>
      )}
    </>
  );
};

export default TvShows;
