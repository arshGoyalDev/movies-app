import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { fetchDetails } from "../../utils";

import { DetailsLoader } from "../loaders";
import DetailsOther from "./DetailsOther";
import CastCrew from "./CastCrew";
import Videos from "./Videos";
import Recommended from "./Recommended";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

const Details = ({ query, setDetailsVisible }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [castCrew, setCastCrew] = useState([]);
  const [videos, setVideos] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetails(
      query,
      id,
      setDetails,
      setCastCrew,
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
      <div
        className="details--wrapper"
        onClick={() => {
          navigate(`/${query}`);
          setDetailsVisible(false);
        }}
      >
        <div className="close-btn">
          <button>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
        </div>
      </div>
      <div className="details">
        {!loading ? (
          <>
            <div className="details--title">
              <h1>{details.title ? details.title : details.name}</h1>
              <p>{details.tagline ? details.tagline : ""}</p>
            </div>
            <DetailsOther details={details} query={query} />
            <CastCrew data={castCrew} />
            {/* <Videos data={videos} /> */}
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
