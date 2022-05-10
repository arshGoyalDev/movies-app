import { BottomNav, NavBar, SideMenu } from "../components/sections";

import OptionsBar from "../components/OptionsBar";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <main className="flex min-h-screen bg-red">
      <SideMenu />
      
      <div className="w-full">
        <BottomNav />
        <NavBar />
        <OptionsBar />
        
        <div className="px-5 md:px-16 xl:pr-24 xl:pl-10 mt-6">
          <Trending />
        </div>
      </div>
    </main>
  );
};

export default Home;
