import React from "react";

const EmbeddedVideo = ({ id }) => {
  return (
    <div className="video">
      <iframe
        width="260"
        height="160"
        src={`https://www.youtube.com/embed/${id}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      />
    </div>
  );
};

export default EmbeddedVideo;
