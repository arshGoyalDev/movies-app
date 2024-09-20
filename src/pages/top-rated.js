import OptionsBar from "../components/OptionsBar";
import List from "../components/List";

const TopRated = () => {
  return (
    <div>
      <OptionsBar/>

      <div className="flex flex-col gap-8">
        <List type="movie" query="top_rated"/>
        <List type="tv" query="top_rated"/>
      </div>
    </div>
  );
};

export default TopRated;
