import { useContext } from "react";
import { SideMenuContext } from "../context";

import { useLocation, Outlet } from "react-router-dom";

import { NavBar, BottomNav, SideBar } from "../components/sections";
import OptionsBar from "../components/OptionsBar";
import { TrendingPeople } from "../components/Trending";
import List from "../components/List";

const People = () => {
  const location = useLocation();
  const { menuOpen } = useContext(SideMenuContext);

  return (
    <>
      {location.pathname.includes("/people/") ? (
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
