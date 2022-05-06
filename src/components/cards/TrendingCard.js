const TrendingCard = ({ data, active, setActiveNum, dataNum }) => {
  return (
    <div
      onClick={() => setActiveNum(dataNum)}
      className={`relative ${
        active ? "w-40 h-24 border-[6px]" : "w-32 h-20 border-4"
      } border-solid border-gray-600 rounded-lg overflow-hidden cursor-pointer`}
    >
      <div className="absolute z-[1] w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt="backdrop"
          className="w-full h-full"
        />
      </div>
      <div className="absolute z-[2] flex items-end p-4 md:p-8 lg:p-12 w-full h-full text-white bg-black bg-opacity-20"></div>
    </div>
  );
};

TrendingCard.defaultProps = {
  active: false,
};

export default TrendingCard;
