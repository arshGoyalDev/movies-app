import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { fetchDetails } from "../../utils";

import DetailsOther from "./DetailsOther";
import CastCrew from "./CastCrew";
import Reviews from "./Reviews";
import Videos from "./Videos";
import Recommended from "./Recommended";
import DetailsWrapper from "./DetailsWrapper";
import { DetailsLoader } from "../loaders";

const Details = ({ query, setDetailsVisible }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [castCrew, setCastCrew] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [videos, setVideos] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetails(
      query,
      id,
      setDetails,
      setCastCrew,
      setReviews,
      setVideos,
      setRecommended,
      setLoading
    );
    setLoading(true);
    setDetailsVisible(true);
  }, [id, query, setDetailsVisible]);

  useEffect(() => {
    if (loading === "almost") {
      let filteredVideos = videos.filter((video) => {
        let name = video.name.toLowerCase();
        let output;

        if (name.includes("trailer") || name.includes("teaser")) {
          output = video;
        }
        return output;
      });

      loading === "almost" && setVideos(filteredVideos);
      setLoading(false);
    }
  }, [videos, loading]);

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
            <CastCrew data={castCrew} />
            <Reviews data={reviews} />
            <Videos data={videos} backdrop={details.backdrop_path} />
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
