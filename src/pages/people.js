import { useLocation, Outlet } from "react-router-dom";

import { NavBar, BottomNav, SideBar } from "../components/sections";
import OptionsBar from "../components/OptionsBar";
import List from "../components/List";
import { TrendingPeople } from "../components/Trending";

const People = () => {
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
              <TrendingPeople />

              <div className="flex flex-col gap-8">
                <List type="person" query="popular" />
              </div>
            </div>

            <BottomNav />
          </section>
        </main>
      )}
    </>
  );
};

export default People;
