import EmbeddedVideo from "../EmbeddedVideo";

const Videos = ({data}) => {
  return (
    <div className="details--videos">
      {data.length !== 0 && (
        <>
          <h3>Videos</h3>
          <div>
            {data.map((video) => (
              <EmbeddedVideo key={video.id} id={video.key} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Videos;
