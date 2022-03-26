import { Link } from "react-router-dom";
import { modifyDate } from "../../utils/time";

import Rating from "../Rating";

const TrendingItem = ({ data }) => {
  return (
    <div className="trending--item">
      <div className="trending--item--poster">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title ? data.title : data.name}
        />
      </div>
      <div className="trending--item--details">
        <h1>{data.title ? data.title : data.name}</h1>
        <p className="date">{modifyDate(data.release_date ? data.release_date : data.first_air_date)}</p>
        <p>{data.overview.slice(0, 100)}...</p>
        <Rating rating={data.vote_average} boxStyle={true} />
        <Link to={`/${data.media_type}/${data.id}`}>
          <button>More</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingItem;
