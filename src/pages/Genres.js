// import React from 'react'
import { useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks";

import { SideMenuContext } from "../context";

import { Outlet } from "react-router-dom";

import { SideBar, NavBar, BottomNav } from "../components/sections";
import OptionsBar from "../components/OptionsBar";
import { GenresList } from "../components/genres";

const Genres = () => {
  const { menuOpen } = useContext(SideMenuContext);

  const movieGenres = useFetch(`genre/movie/list?language=en-US&`, "genres");
  const tvGenres = useFetch(`genre/tv/list?language=en-US&`, "genres");

  const [loading, setLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState("");

  useEffect(() => {
    if (!(movieGenres && tvGenres)) return;

    setLoading(false);
  }, [movieGenres, tvGenres]);

  return (
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

          <div className="flex flex-col gap-8">
            <GenresList
              type="movie"
              list={movieGenres}
              loading={loading}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
            <GenresList
              type="tv"
              list={tvGenres}
              loading={loading}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
          </div>

          <Outlet />
        </div>

        <BottomNav />
      </section>
    </main>
  );
};

export default Genres;
