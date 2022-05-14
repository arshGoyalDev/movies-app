import List from "../components/List";
import OptionsBar from "../components/OptionsBar";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="mt-0">
      <OptionsBar />
      <Trending />

      <List type="person" query="popular" />

      <List type="movie" query="now_playing" />
      <List type="tv" query="on_the_air" />

      <List type="movie" query="popular" />
      <List type="tv" query="popular" />
    </div>
  );
};

export default Home;
