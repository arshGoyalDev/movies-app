import OptionsBar from '../components/OptionsBar'
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="px-5 md:px-16 xl:pr-24 xl:pl-10 mt-0">
      <OptionsBar />
      <Trending />
    </div>
  );
};

export default Home;
