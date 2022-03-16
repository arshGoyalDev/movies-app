import "./styles/PosterCard.scss";

import CardImage from "./CardImage";
import Rating from "../Rating";

import { useNavigate } from "react-router-dom";

import { modifyDate } from "../../utils/time";

const PosterCard = ({ data }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/${data.title ? "movie" : "tv"}/${data.id}`);
  };

  return (
    <div className="poster-card" onClick={clickHandler}>
      <CardImage
        imagePath={data.poster_path}
        name={data.title ? data.title : data.name}
      />
      <div className="poster-card--body">
        <p className="release-date">{modifyDate(data.release_date ? data.release_date : data.first_air_date)}</p>
        <p className="name">{data.title ? data.title : data.name}</p>
        <Rating rating={data.vote_average} />
      </div>
    </div>
  );
};

export default PosterCard;
