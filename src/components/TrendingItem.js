const TrendingItem = ({ data, trendingData, index }) => {
  return (
    <div
      className={`trending--items--item ${
        trendingData.indexOf(data) === index ? "active" : ""
      }`}
    >
      <div className="trending--items--item--poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title ? data.title : data.name}
        />
      </div>
      <div className="trending--items--item--details">
        <h1>{data.title ? data.title : data.name}</h1>
        <p>{data.overview.slice(0, 100)}...</p>
        <button>More</button>
      </div>
    </div>
  );
};

export default TrendingItem;
