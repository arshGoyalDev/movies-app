import React from "react";

const DetailsLoader = () => {
  return (
    <div className="loading--details">
      <div className="loading--details--heading"></div>
      <div className="loading--details--overview"></div>
      <div className="loading--details--cast-crew">
      <div className="loading--details--category--heading"></div>
        <div className="loading--details--category--cards"></div>
      </div>
      <div className="loading--details--cast-crew">
        <div className="loading--details--category--heading"></div>
        <div className="loading--details--category--cards"></div>
      </div>
      <div className="loading--details--videos">
        <div className="loading--details--category--heading"></div>
        <div className="loading--details--category--cards videos--cards"></div>
      </div>
    </div>
  );
};

export default DetailsLoader;
