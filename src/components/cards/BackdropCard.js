import "../styles/Card.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";

const BackDropCard = ({ data }) => {

  const clickHandler = () => {
    console.log("Clicked", data.title ? data.title : data.name);
  }

  return (
    <div className="backdrop-card" onClick={clickHandler}>
      <div className="backdrop-card--backdrop">
        {!data.backdrop_path ? (
          <p>Sorry No Image Available</p>
        ) : (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={data.title ? data.title : data.name}
          />
        )}
      </div>
      <div
        className={`backdrop-card--body ${
          data.vote_average !== 0 ? "rated" : ""
        }`}
      >
        {data.vote_average !== 0 && (
          <div className="backdrop-card--body--rating">
            <FontAwesomeIcon icon={faHeart} />{" "}
            {data.vote_average}
          </div>
        )}
        <div className="backdrop-card--body--details">
          <div>
            {/* <Link to={`/${data.title ? "movie" : "tv"}/${data.id}`}> */}
            <button className="backdrop-card--body--details--btn">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
            {/* </Link> */}
            {/* {/* <Link to={`/${data.title ? "movie" : "tv"}/${data.id}`}> */}
            <h3 className="backdrop-card--body--details--title">
              {data.title ? data.title : data.name}
            </h3>
            {/* </Link> */}
          </div>
          <div className="backdrop-card--body--details--progress">
            <div className="backdrop-card--body--details--progress--completed"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackDropCard;
