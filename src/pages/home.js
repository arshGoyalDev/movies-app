import { useContext } from "react";
import { SideMenuContext } from "../context";

import { SideBar, NavBar, BottomNav } from "../components/sections";
import OptionsBar from "../components/OptionsBar";
import List from "../components/List";
import Trending from "../components/Trending";

const Home = () => {
  const { menuOpen } = useContext(SideMenuContext);

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
          <Trending type="all" />

          <div className="flex flex-col gap-8">
            <List type="person" query="popular" pages={1} />

            <List type="movie" query="now_playing" pages={1} />
            <List type="tv" query="on_the_air" pages={1} />

            <List type="movie" query="popular" pages={1} />
            <List type="tv" query="popular" pages={1} />
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
};

export default Home;
