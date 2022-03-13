import "./styles/VideoPlayer.scss";

import { useDispatch, useSelector } from "react-redux";

import { clearVideoDetails } from "../../features/videoSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = () => {
  const dispatch = useDispatch();
  const {key, name} = useSelector((state) => state.videoDetails.value);

  const closePlayer = () => {
    console.log("hello")
    dispatch(clearVideoDetails());
  };

  return (
    <>
      <div className="video-wrapper" onClick={closePlayer}></div>
      <div className="video-player">
        <div className="video-player--header">
          <h2>{name}</h2>
          <button className="close-btn" onClick={closePlayer}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="video-player--video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${key}?controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
