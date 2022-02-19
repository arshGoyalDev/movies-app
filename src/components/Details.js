import { useState, useEffect } from "react";

import "./styles/Details.scss";

import { useParams } from "react-router-dom";

import { fetchDetails } from "../utils/fetch";
import { releaseDate, convertMinsToHrsMins } from '../utils/time';

import ProfileCard from "./cards/ProfileCard";

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

  return (
    <div className="details">
      {!loading ? (
        <>
          <div className="details--title">
            <h1>{details.title ? details.title : details.name}</h1>
            <p>{details.tagline}</p>
            <p>Release Date: {releaseDate(details.release_date ? details.release_date : details.on_air_date)}</p>
          </div>
          <div className="details--cast">
            <h3>Cast</h3>
            <div>
              {castCrew.cast.map((item) => (
                <ProfileCard key={item.name} data={item} />
              ))}
            </div>
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
                    <span key={item.id}>{item.name + ", "}</span>
                  ))}
                <span>{details.genres[details.genres.length - 1].name}</span>
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
          </div>
          <div className="details--crew">
            <h3>Crew</h3>
            <div>
              {castCrew.crew.map((item) => (
                <ProfileCard key={item.name} data={item} />
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
