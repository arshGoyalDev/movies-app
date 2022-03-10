import { VideoCard } from "../cards";

const Videos = ({ data, backdrop }) => {
  return (
    <div className="details--videos">
      {data.length !== 0 && (
        <>
          <h3>Videos</h3>
          <div>
            {data.map((video) => (
              <VideoCard key={video.id} data={video} backdrop={backdrop} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Videos;
