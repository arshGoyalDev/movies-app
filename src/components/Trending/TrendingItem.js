import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TrendingItem = ({ data }) => {
  console.log(data);
  return (
    <div className="trending--items--item">
      <div className="trending--items--item--poster">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title ? data.title : data.name}
        />
      </div>
      <div className="trending--items--item--details">
        <h1>{data.title ? data.title : data.name}</h1>
        <p>{data.overview.slice(0, 100)}...</p>
        {data.vote_average !== 0 && (
          <p className="rating">
            <i>
              <FontAwesomeIcon icon={faHeart} />
            </i>
            <span className="votes">{data.vote_average}</span>
            <span>/</span>
            <span>10</span>
          </p>
        )}
        <Link to={`/${data.media_type}/${data.id}`}>
          <button>More</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingItem;
