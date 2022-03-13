import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks";

import DetailsOther from "./DetailsOther";
import CastCrew from "./CastCrew";
import Reviews from "./Reviews";
import Videos from "./Videos";
import Recommended from "./Recommended";
import DetailsWrapper from "./DetailsWrapper";
import { DetailsLoader } from "../loaders";

const Details = ({
  query,
  setDetailsVisible,
  setVideoDetails,
  setProfileDetails,
}) => {
  const { id } = useParams();
  const details = useFetch(`${query}/${id}?language=en-US&`, false);
  const castCrew = useFetch(`${query}/${id}/credits?language=en-US&`, false);
  const reviews = useFetch(`${query}/${id}/reviews?language=en-US&`, false);
  const videos = useFetch(`${query}/${id}/videos?language=en-US&`, "results");
  const recommended = useFetch(
    `${query}/${id}/recommendations?language=en-US&page=1&`,
    "results"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (details && castCrew && reviews && videos && recommended) {
      setLoading(false);
    }
  }, [details, castCrew, reviews, videos, recommended]);

  return (
    <>
      <DetailsWrapper query={query} setDetailsVisible={setDetailsVisible} />
      <div className="details">
        {!loading ? (
          <>
            <div className="details--title">
              <h1>{details.title ? details.title : details.name}</h1>
              <p>{details.tagline ? details.tagline : ""}</p>
            </div>

            <DetailsOther details={details} query={query} />
            <CastCrew data={castCrew} setProfileDetails={setProfileDetails} />
            <Reviews data={reviews} />
            <Videos
              data={videos.reverse()}
              backdrop={details.backdrop_path}
              setVideoDetails={setVideoDetails}
            />
            <Recommended data={recommended} />
          </>
        ) : (
          <DetailsLoader />
        )}
      </div>
    </>
  );
};

export default Details;
