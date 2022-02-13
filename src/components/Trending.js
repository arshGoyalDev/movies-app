import { useState, useEffect } from "react";

import "./styles/Trending.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import TrendingItem from './TrendingItem';

const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    setTrendingData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    trendingData.map((item) => {
      console.log(item);
    });
  }, [trendingData]);

  return (
    <div className="trending">
      <div className="trending--items">
        {trendingData.map((item) => (
          <TrendingItem key={item.title ? item.title : item.name} data={item} />
        ))}
      </div>
      <div className="trending--controls">
        <button className="trending--control--prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="trending--control--next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Trending;
