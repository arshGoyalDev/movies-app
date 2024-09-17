const TrendingCard = ({ data, active, setActiveNum, dataNum }) => {
  return (
    <div
      onClick={() => setActiveNum(dataNum)}
      className={`relative ${
        active ? "w-40 h-24 active-card" : "w-32 h-20"
      } rounded-lg cursor-pointer`}
    >
      <div className="absolute z-[5] w-full h-full border-2 border-neutral-800 rounded-lg overflow-hidden">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt="backdrop"
          className="w-full h-full"
        />
      </div>
      <div className="absolute z-[6] w-full h-full bg-black bg-opacity-20 rounded-lg"></div>
    </div>
  );
};

TrendingCard.defaultProps = {
  active: false,
};

export default TrendingCard;
