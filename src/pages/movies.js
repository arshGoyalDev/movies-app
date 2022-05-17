import { Outlet, useLocation } from "react-router-dom";

import List from "../components/List";
import OptionsBar from "../components/OptionsBar";
import Trending from "../components/Trending";

import { SideBar, NavBar, BottomNav } from "../components/sections";

const Movies = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("/movies/") ? (
        <Outlet />
      ) : (
        <main className="flex h-screen w-full">
          <SideBar />

          <section className="w-full pb-32 sm:pb-16 overflow-x-hidden overflow-y-auto scrollbar">
            <NavBar />

            <div className="mt-0">
              <OptionsBar />
              <Trending type="movie" />

              <div className="flex flex-col gap-8">
                <List type="movie" query="now_playing" />
                <List type="movie" query="popular" />
              </div>
            </div>

            <BottomNav />
          </section>
        </main>
      )}
    </>
  );
};

export default Movies;
