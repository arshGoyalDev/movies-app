import OptionsBar from "../components/OptionsBar";
import List from "../components/List";

const Upcoming = () => {
  return (
    <div>
      <OptionsBar />

      <div className="flex flex-col gap-8">
        <List type="movie" query="upcoming" />
        <List type="tv" query="airing_today" />
      </div>
    </div>
  );
};

export default Upcoming;
