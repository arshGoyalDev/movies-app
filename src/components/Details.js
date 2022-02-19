import { useState, useEffect } from "react";

import "./styles/Details.scss";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchDetails } from "../utils/fetch";
import { releaseDate, convertMinsToHrsMins } from "../utils/time";

import ProfileCard from "./cards/ProfileCard";
import EmbeddedVideo from "./EmbeddedVideo";
import { faChainSlash } from "@fortawesome/free-solid-svg-icons";

const Details = ({ query }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [videos, setVideos] = useState([]);
  const [castCrew, setCastCrew] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDetails(
      query,
      id,
      setDetails,
      setSimilar,
      setVideos,
      setCastCrew,
      setLoading
    );
  }, [id, query]);

  let keys = "";

  const removeDuplicates = (array, key) => {
    return [...new Map(array.map((item) => [item[key], item])).values()];
  };

  for (var key in castCrew) {
    if (key !== "id") {
      keys += [key + " "];
    }
  }

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
          {keys
            .split(" ")
            .slice(0, 2)
            .map((item) => (
              castCrew[item].length !== 0 && (
                <div key={item} className={`details--${item}`}>
                  <h3>{item}</h3>
                  <div>
                    {removeDuplicates(castCrew[item], "name").map(
                      (personData) => (
                        <ProfileCard key={personData.name} data={personData} />
                      ))}
                  </div>
                </div>
              )))}
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
