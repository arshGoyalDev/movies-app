import "../styles/Card.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";

const PosterCard = ({ data }) => {
  const clickHandler = () => {
    console.log("Clicked", data.title ? data.title : data.name);
  };

  return (
    <div className="poster-card" onClick={clickHandler}>
      <div className="poster-card--poster">
        {!data.poster_path ? (
          <p>No Image Available</p>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title ? data.title : data.name}
          />
        )}
        <div className="poster-card--body">
          <div className="poster-card--body--rating">
            <FontAwesomeIcon icon={faHeart} /> <span>{data.vote_average}</span>
          </div>
          <div className="poster-card--body--details">
            <Link to={`/${data.title ? "movie" : "tv"}/${data.id}`}>
              <h3 className="backdrop-card--body--details--title">
                {data.title ? data.title : data.name}
              </h3>
            </Link>
            <div className="backdrop-card--body--details--progress">
              <div className="backdrop-card--body--details--progress--completed"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
