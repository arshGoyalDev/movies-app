import "./styles/VideoPlayer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = ({ setPlaying, videoDetails, setVideoDetails }) => {
  const closePlayer = (e) => {
    setPlaying(false);
    setVideoDetails({});
  };

  return (
    <>
      <div className="video-wrapper" onClick={closePlayer}></div>
      <div className="video-player">
        <div className="video-player--header">
          <h2>{videoDetails.name}</h2>
          <button className="close-btn" onClick={closePlayer}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {/* <div className="video-player--player"> */}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoDetails.key}?controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <div></div> */}
      </div>
    </>
  );
};

export default VideoPlayer;
