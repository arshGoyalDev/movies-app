import "./styles/BackdropCard.scss";

import CardImage from "./CardImage";
import Rating from "../Rating";

import { useNavigate } from "react-router-dom";

const BackDropCard = ({ data }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/${data.title ? "movie" : "tv"}/${data.id}`);
  };

  return (
    <div className="backdrop-card" onClick={clickHandler}>
      <CardImage
        imagePath={data.backdrop_path}
        name={data.title ? data.title : data.name}
      />
      <div className="backdrop-card--body">
        <div className="card-details">
          <Rating rating={data.vote_average} />
          <p className="title">{data.title ? data.title : data.name}</p>
        </div>
      </div>
    </div>
  );
};

export default BackDropCard;
