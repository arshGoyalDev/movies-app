import { useContext } from "react";
import { SideMenuContext } from "../context";

import { Outlet, useLocation } from "react-router-dom";

import { SideBar, NavBar, BottomNav } from "../components/sections";

import Trending from "../components/Trending";
import OptionsBar from "../components/OptionsBar";
import List from "../components/List";

const Movies = () => {
  const location = useLocation();
  const { menuOpen } = useContext(SideMenuContext);

  return (
    <>
      {location.pathname.includes("/movies/") ? (
        <Outlet />
      ) : (
        <main className="flex min-h-screen w-full">
          <SideBar />

          <section
            className={`w-full pb-32 sm:pb-16 ${
              menuOpen ? "xl:pl-72" : "xl:pl-20"
            } transition-[padding] duration-300`}
          >
            <NavBar />

            <div>
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
