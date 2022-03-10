const VideoCard = ({ data, backdrop }) => {
  return (
    <div className="video">
      <div className="video--backdrop">
        <img src={`https://image.tmdb.org/t/p/w500${backdrop}`} alt="" />
      </div>
    </div>
  );
};

export default VideoCard;
