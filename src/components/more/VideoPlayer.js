import "./styles/VideoPlayer.scss";

import { useDispatch, useSelector } from "react-redux";

import { clearVideoDetails } from "../../features/videoSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = () => {
  const dispatch = useDispatch();
  const videoDetails = useSelector((state) => state.videoDetails.value);

  const closePlayer = (e) => {
    dispatch(clearVideoDetails());
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
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoDetails.key}?controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
