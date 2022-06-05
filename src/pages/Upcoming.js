import { SideBar, NavBar, BottomNav } from "../components/sections";

import OptionsBar from "../components/OptionsBar";
import List from "../components/List";

const Upcoming = () => {
  return (
    <main className="flex h-screen w-full">
      <SideBar />

      <section className="w-full pb-32 sm:pb-16 overflow-x-hidden overflow-y-auto scrollbar">
        <NavBar />

        <div>
          <OptionsBar />

          <div className="flex flex-col gap-8">
            <List type="movie" query="upcoming" />
            <List type="tv" query="airing_today" />
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
};

export default Upcoming;