import { BottomNav, NavBar, SideMenu } from "../components/sections";

const Home = () => {
  return (
    <main className="flex min-h-screen bg-red">
      <SideMenu />
      <div className="w-full">
        <BottomNav />
        <NavBar />
      </div>
    </main>
  );
};

export default Home;
