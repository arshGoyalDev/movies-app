import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { fetchData, fetchDetails } from "../utils";

const Details = ({ query }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDetails(query, id, setDetails, setLoading);
    fetchData(
      `https://api.themoviedb.org/3/${query}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      setSimilar,
      true
    );
    fetchData(
      `https://api.themoviedb.org/3/${query}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      setVideos,
      true
    );
  }, [id, query]);

  return <div className="details">{id}</div>;
};

export default Details;
