import List from "../components/List";
import OptionsBar from "../components/OptionsBar";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="mt-0">
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
  );
};

export default Home;
