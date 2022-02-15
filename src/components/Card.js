import "./styles/Card.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div className="card--backdrop">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${
            data.backdrop_path ? data.backdrop_path : data.poster_path
          }`}
          alt={data.title ? data.title : data.name}
        />
      </div>
      <div className={`card--body ${data.vote_average !== 0 ? 'rated' : ""}`}>
        {data.vote_average !== 0 && (
          <div className="card--body--rating">
            <FontAwesomeIcon icon={faHeart} />{" "}
            {data.vote_average !== 0 && data.vote_average}
          </div>
        )}
        <div className="card--body--more">
          <Link to={`/${data.title ? "movie" : "tv"}/${data.id}`}>
            <button className="card--body--more--btn">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Link>
          <Link to={`/${data.title ? "movie" : "tv"}/${data.id}`}>
            <h3 className="card--body--more--title">
              {data.title ? data.title : data.name}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
