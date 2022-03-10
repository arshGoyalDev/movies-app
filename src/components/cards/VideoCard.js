import './styles/VideoCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';

import { modifyDate } from "../../utils";

const VideoCard = ({ data, backdrop }) => {
  return (
    <div className="video-card">
      <div className="video-card--backdrop">
        <img src={`https://image.tmdb.org/t/p/w500${backdrop}`} alt="" />
      </div>
      <div className="video-card--details">
        <h4>{data.name}</h4>
        <span>{modifyDate(data.published_at)}</span>
      </div>
      <FontAwesomeIcon icon={faImage} />
    </div>
  );
};

export default VideoCard;
