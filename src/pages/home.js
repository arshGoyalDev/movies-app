import { BottomNav, NavBar, SideMenu } from "../components/sections";

import OptionsBar from "../components/OptionsBar";

const Home = () => {
  return (
    <main className="flex min-h-screen bg-red">
      <SideMenu />
      <div className="w-full">
        <BottomNav />
        <NavBar />
        <OptionsBar />
      </div>
    </main>
  );
};

export default Home;
