import { BackdropCard } from "../cards";

const Recommended = ({ data, query }) => {
  return (
    <div className="details--similar">
      {data.length !== 0 && (
        <>
          <h3>recommended {query === "movie" ? "movies" : "tv shows"}</h3>
          <div>
            {data.map((item) => (
              <BackdropCard key={item.id} data={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Recommended;
