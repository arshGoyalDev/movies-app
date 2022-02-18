import { useState, useEffect } from "react";

import "./styles/Details.scss";

import { useParams } from "react-router-dom";

import { fetchDetails } from "../utils";

const Details = ({ query }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [videos, setVideos] = useState([]);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDetails(
      query,
      id,
      setDetails,
      setSimilar,
      setVideos,
      setCast,
      setLoading
    );
  }, [id, query]);

  console.log(details);

  const convertMinsToHrsMins = (mins) => {
    const h = Math.floor(mins / 60) + "hrs";
    const m = (mins % 60) + "mins";
    return `${h} ${m}`;
  };

  return (
    <div className="details">
      {!loading ? (
        <>
          <div>
            <div className="details--title">
              <h1>{details.title ? details.title : details.name}</h1>
              <p>{details.tagline}</p>
              <p>
                Release Data:{" "}
                {new Date(
                  details.release_date
                    ? details.release_date
                    : details.first_air_date
                ).toLocaleDateString()}
              </p>
            </div>
            <div className="details--cast">
              {cast.map((item) => (
                <div key={item.name} className="details--cast--card">
                  <div className="details--cast--card--photo">
                    {!item.profile_path ? (
                      <p>Sorry! No profile photo available</p>
                    ) : (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                      />
                    )}
                  </div>

                  <div className="details--cast--card--body">
                    <p className="name">{item.name}</p>
                    <p className="role">{item.character}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="details--other">
              <div>
                <div className="overview">
                  <h3>Overview</h3>
                  <p>{details.overview}</p>
                </div>
                <div className="genre">
                  <h3>Genre</h3>
                  <p>
                    {details.genres
                      .slice(0, details.genres.length - 1)
                      .map((item) => (
                        <span key={item.id}>{item.name + ", "}</span>
                      ))}
                    <span>
                      {details.genres[details.genres.length - 1].name}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                {details.runtime ? (
                  <div className="runtime">
                    <h3>Runtime</h3>
                    <p>{convertMinsToHrsMins(details.runtime)}</p>
                  </div>
                ) : (
                  <div className="seasons">
                    <h3>Seasons</h3>
                    <div>
                      {details.seasons.map((season) => (
                        <span>
                          {season.name} : {season.episode_count + " episodes"}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Details;
