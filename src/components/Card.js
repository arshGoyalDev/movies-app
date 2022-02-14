import "./styles/Card.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card--backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            data.backdrop_path ? data.backdrop_path : data.poster_path
          }`}
          alt={data.title ? data.title : data.name}
        />
      </div>
      <div className="card--body">
        <Link to={`/${data.media_type}/${data.id}`}>
          <button className="card--body--more-btn">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </Link>
        <Link to={`/${data.title ? "movie" : "tv"}/${data.id}`}>
          <h3 className="card--body--title">
            {data.title ? data.title : data.name}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Card;
