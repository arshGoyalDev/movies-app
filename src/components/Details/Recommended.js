import { BackdropCard } from "../cards";

const Recommended = ({ data, query }) => {
  return (
    <div className="details--recommended">
      {data.length !== 0 && (
        <>
          <h3>Recommended {query === "movie" ? "movies" : "tv shows"}</h3>
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
