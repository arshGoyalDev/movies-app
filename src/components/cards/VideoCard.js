import "./styles/VideoCard.scss";

import CardImage from "./CardImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const VideoCard = ({ data, backdrop }) => {
  return (
    <div className="video-card">
      <CardImage imagePath={backdrop} name={data.name} />
      <div className="video-card--body">
        <h4>{data.name}</h4>
      </div>
      <div className="video-card--play">
        <button className="play-btn">
          <FontAwesomeIcon icon={faPlayCircle} />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
