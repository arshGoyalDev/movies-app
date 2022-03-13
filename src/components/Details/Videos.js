import { useState, useEffect } from "react";

import { VideoCard } from "../cards";

const Videos = ({ data, backdrop }) => {
  const [videos, setVideos] = useState(data);

  useEffect(() => {
    let filteredVideos = videos.filter((video) => {
      let name = video.name.toLowerCase();
      let output;
      if (
        name.includes("trailer") ||
        name.includes("teaser") ||
        name.includes("first")
      ) {
        output = video;
      }
      return output;
    });
    setVideos(filteredVideos);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="details--videos">
      {videos.length !== 0 && (
        <>
          <h3>Videos</h3>
          <div className="videos">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                data={video}
                backdrop={backdrop}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Videos;
