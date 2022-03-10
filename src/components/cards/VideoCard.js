import "./styles/VideoCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

import { modifyDate } from "../../utils";
import CardImage from "./CardImage";

const VideoCard = ({ data, backdrop }) => {
  return (
    <div className="video-card">
      <CardImage imagePath={backdrop} name={data.name} />
      <div className="video-card--details">
        <h4>{data.name}</h4>
        <span>{modifyDate(data.published_at)}</span>
      </div>
    </div>
  );
};

export default VideoCard;
