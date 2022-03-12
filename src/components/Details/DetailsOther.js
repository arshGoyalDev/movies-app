import { Link } from "react-router-dom";

import { modifyDate, convertMinsToHrsMins } from "../../utils";

const DetailsOther = ({ details, query }) => {
  return (
    <div className="details--other">
      <div className="overview">
        <h3>Overview</h3>
        <p>{details.overview}</p>
      </div>
      <div className="genre">
        <h3>Genre</h3>
        <p>
          {details.genres[1] !== undefined ? (
            <>
              {details.genres
                .slice(0, details.genres.length - 1)
                .map((item) => (
                  <Link key={item.id} to={`/genre/${query}/${item.id}`}>
                    <span>{item.name + ", "}</span>
                  </Link>
                ))}
              <Link
                to={`/genre/${query}/${
                  details.genres[details.genres.length - 1]?.id
                }`}
              >
                <span>{details.genres[details.genres.length - 1]?.name}</span>
              </Link>
            </>
          ) : (
            <span>No genres</span>
          )}
        </p>
      </div>
      {details.runtime ? (
        <div className="runtime">
          <h3>Runtime</h3>
          <p>{convertMinsToHrsMins(details.runtime)}</p>
        </div>
      ) : (
        <>
          {details.seasons && (
            <div className="seasons">
              <h3>Seasons</h3>
              <div>
                {details.seasons?.map((season) => (
                  <span key={season.name}>
                    {season.name} : {season.episode_count + " episodes"}
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      {query === "movie" && (
        <div className="release-date">
          <h3>Release Date</h3>
          <p>
            {details.release_date
              ? modifyDate(details.release_date)
              : "Not Defined"}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailsOther;
