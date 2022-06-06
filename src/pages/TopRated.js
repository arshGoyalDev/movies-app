import { useContext } from "react";
import { SideMenuContext } from "../context";

import { SideBar, NavBar, BottomNav } from "../components/sections";

import OptionsBar from "../components/OptionsBar";
import List from "../components/List";

const TopRated = () => {
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

          <div className="flex flex-col gap-8">
            <List type="movie" query="top_rated" />
            <List type="tv" query="top_rated" />
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
};

export default TopRated;
