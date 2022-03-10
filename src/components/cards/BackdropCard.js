import "./styles/BackdropCard.scss";

import CardImage from "./CardImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const BackDropCard = ({ data }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/${data.title ? "movie" : "tv"}/${data.id}`);
  };

  return (
    <div className="backdrop-card" onClick={clickHandler}>
      <CardImage imagePath={data.backdrop_path} name={data.title ? data.title : data.name} />
      <div
        className={`backdrop-card--body ${
          data.vote_average !== 0 ? "rated" : ""
        }`}
      >
        {data.vote_average !== 0 && (
          <div className="backdrop-card--body--rating">
            <FontAwesomeIcon icon={faHeart} /> {data.vote_average.toFixed(1)}
          </div>
        )}
        <div className="backdrop-card--body--details">
          <div>
            <button className="backdrop-card--body--details--btn">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
            <h3 className="backdrop-card--body--details--title">
              {data.title ? data.title : data.name}
            </h3>
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
