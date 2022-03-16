import CardImage from "./CardImage";
import "./styles/TrendingCard.scss";

const TrendingCard = ({ data, trendingData, index, setIndex }) => {
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
      <CardImage
        imagePath={data.backdrop_path}
        name={data.title ? data.title : data.name}
      />
      <h3 data-index={trendingData.indexOf(data)}>
        {data.title ? data.title : data.name}
      </h3>
    </div>
  );
};

export default TrendingCard;
