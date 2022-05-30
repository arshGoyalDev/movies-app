import { SideBar, NavBar, BottomNav } from "../components/sections";

import OptionsBar from "../components/OptionsBar";

const Upcoming = () => {
  return (
    <main className="flex h-screen w-full">
      <SideBar />

      <section className="w-full pb-32 sm:pb-16 overflow-x-hidden overflow-y-auto scrollbar">
        <NavBar />

        <div>
          <OptionsBar />

          <p>Upcoming</p>
        </div>

        <BottomNav />
      </section>
    </main>
  );
};

export default Upcoming;
