import List from "../components/List";
import OptionsBar from "../components/OptionsBar";
import Trending from "../components/Trending";

const Movies = () => {
  return (
    <div className="mt-0">
      <OptionsBar />
      <Trending type="movie" />

      <div className="flex flex-col gap-8">
        <List type="movie" query="now_playing" />
        <List type="movie" query="popular" />
      </div>
    </div>
  );
};

export default Movies;
