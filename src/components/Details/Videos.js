import { useState } from "react";

import { VideoCard } from "../cards";

const Videos = ({ data, backdrop, setPlaying, setVideoDetails }) => {
  return (
    <div className="details--videos">
      {data.length !== 0 && (
        <>
          <h3>Videos</h3>
          <div className="videos">
            {data.map((video) => (
              <VideoCard
                key={video.id}
                data={video}
                backdrop={backdrop}
                setPlaying={setPlaying}
                setVideoDetails={setVideoDetails}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Videos;
