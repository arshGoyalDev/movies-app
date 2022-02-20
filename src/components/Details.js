import { useState, useEffect } from "react";

import "./styles/Details.scss";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchDetails } from "../utils/fetch";
import { releaseDate, convertMinsToHrsMins } from "../utils/time";

import ProfileCard from "./cards/ProfileCard";
import EmbeddedVideo from "./EmbeddedVideo";

const Details = ({ query }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [videos, setVideos] = useState([]);
  const [castCrew, setCastCrew] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetails(
      query,
      id,
      setDetails,
      setSimilar,
      setVideos,
      setCastCrew,
      setLoading
    );
    setLoading(true);
  }, [id, query]);

  const removeDuplicates = (array, key) => {
    return [...new Map(array.map((item) => [item[key], item])).values()];
  };

  return (
    <div className="details">
      {!loading ? (
        <>
          <div className="details--title">
            <h1>{details.title ? details.title : details.name}</h1>
            <p>{details.tagline ? details.tagline : ""}</p>
          </div> 
          <div className="details--other">
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
                    <Link key={item.id} to={`/genre/${query}/${item.id}`}>
                      <span>{item.name + ", "}</span>
                    </Link>
                  ))}
                <Link
                  to={`/genre/${query}/${
                    details.genres[details.genres.length - 1].id
                  }`}
                >
                  <span>{details.genres[details.genres.length - 1].name}</span>
                </Link>
              </p>
            </div>
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
                    <span key={season.name}>
                      {season.name} : {season.episode_count + " episodes"}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="release-date">
              <h3>Release Date</h3>
              <p>
                {releaseDate(
                  details.release_date
                    ? details.release_date
                    : details.first_air_date
                )}
              </p>
            </div>
          </div>
          {Object.keys(castCrew).map(function (key) {
            if (key !== "id") {
              return (
                <div key={key} className={`details--${key}`}>
                  <h3>{key}</h3>
                  <div>
                    {removeDuplicates(castCrew[key], "name").map(
                      (personData) => (
                        <ProfileCard key={personData.name} data={personData} />
                      )
                    )}
                  </div>
                </div>
              );
            }
          })}
          <div className="details--videos">
            <h3>Videos</h3>
            <div>
              {videos
                .reverse()
                .filter((video) => video.name.includes("Trailer"))
                .map((video) => (
                  <EmbeddedVideo key={video.id} id={video.key} />
                ))}
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