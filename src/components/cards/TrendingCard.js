import "./styles/TrendingCard.scss";

const TrendingCard = ({data, trendingData, index, setIndex}) => {

  const clickCard = (e) => {
    setIndex(parseInt(e.target.getAttribute("data-index")));
  };

  return (
    <div
      className={`trending-card ${
        trendingData.indexOf(data) === index ? "active" : ""
      }`}
      key={data.title ? data.title : data.name}
      onClick={clickCard}
      data-index={trendingData.indexOf(data)}
    >
      <div className="trending-card--background">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title ? data.title : data.name}
        />
      </div>
      <h3 data-index={trendingData.indexOf(data)}>
        {data.title ? data.title : data.name}
      </h3>
    </div>
  );
};

export default TrendingCard;
