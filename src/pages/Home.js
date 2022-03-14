import Trending from "../components/Trending";
import List from "../components/List";

import { genreList } from "../data";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Trending queryType="all" />
      <div className="home--genres">
        <div>
          {genreList.map((genre) => (
            <div key={genre.value} className="home--genres--genre">
              <div className="home--genres--genre--backdrop">
                <img src={genre.img} alt={genre.value} />
              </div>
              <h3>{genre.value}</h3>
              <div className="home--genres--genre--options">
                <Link to={`genre/movie/${genre.id.movie}`}>
                  <button className="home--genres--genre--options--option">
                    Movies
                  </button>
                </Link>
                <Link to={`genre/tv/${genre.id.tv}`}>
                  <button className="home--genres--genre--options--option">
                    Tv Shows
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <List queryType="movie" query="popular" all={false} />
      <List queryType="tv" query="popular" all={false} />
      <List queryType="movie" query="top_rated" all={false} />
      <List queryType="tv" query="top_rated" all={false} />
    </div>
  );
};

export default Home;
