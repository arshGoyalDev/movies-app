import "../styles/Card.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PosterCard = ({ data }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/${data.title ? "movie" : "tv"}/${data.id}`);
  };

  return (
    <div className="poster-card" onClick={clickHandler}>
      <div className="poster-card--poster">
        {!data.poster_path ? (
          <p>Sorry! No image Available</p>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title ? data.title : data.name}
          />
        )}
      </div>
      <div
        className={`poster-card--body ${
          data.vote_average !== 0 ? "rated" : ""
        }`}
      >
        {data.vote_average !== 0 && (
          <div className="poster-card--body--rating">
            <FontAwesomeIcon icon={faHeart} /> {data.vote_average.toFixed(1)}
          </div>
        )}
        <div className="poster-card--body--details">
          <div className="poster-card--body--details--more">
            <button className="poster-card--body--details--more--btn">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>

            <h3 className="poster-card--body--details--more--title">
              {data.title
                ? data.title.length >= 30
                  ? data.title.slice(0, 30) + "..."
                  : data.title
                : data.name.length >= 30
                ? data.name.slice(0, 30) + "..."
                : data.name}
            </h3>
          </div>
          <div className="poster-card--body--details--progress">
            <div className="poster-card--body--details--progress--completed"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
