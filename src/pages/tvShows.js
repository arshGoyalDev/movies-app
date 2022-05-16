import List from "../components/List";
import OptionsBar from "../components/OptionsBar";
import Trending from "../components/Trending";

const TvShows = () => {
  return (
    <div className="mt-0">
      <OptionsBar />
      <Trending type="tv" />

      <div className="flex flex-col gap-8">
        <List type="tv" query="on_the_air" />
        <List type="tv" query="popular" />
      </div>
    </div>
  );
};

export default TvShows;
