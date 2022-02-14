import { useState, useEffect } from "react";

import "./styles/Trending.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import TrendingItem from "./TrendingItem";

const Trending = ({ category }) => {
  const [trendingData, setTrendingData] = useState("");
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/${category}/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    setTrendingData(data.results);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      index === trendingData.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 5000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [index]);

  const prevBtnClick = () => {
    index === 0 ? setIndex(trendingData.length - 1) : setIndex(index - 1);
  };

  const nextBtnClick = () => {
    index === trendingData.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const clickThumbnail = (e) => {
    setIndex(parseInt(e.target.getAttribute("data-index")));
  };

  return (
    <div className="trending">
      {trendingData !== "" ? (
        <>
          <div className="trending--items">
            <TrendingItem
              key={
                trendingData[index].title
                  ? trendingData[index].title
                  : trendingData[index].name
              }
              data={trendingData[index]}
            />
            <div className="trending--items--thumbnails">
              {trendingData.map((item) => (
                <button
                  className={`trending--items--thumbnails--thumbnail ${
                    trendingData.indexOf(item) === index ? "active" : ""
                  }`}
                  key={item.title ? item.title : item.name}
                  onClick={clickThumbnail}
                  data-index={trendingData.indexOf(item)}
                >
                  <div className="trending--items--thumbnails--thumbnail--background">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title ? item.title : item.name}
                    />
                  </div>
                  <h3 data-index={trendingData.indexOf(item)}>
                    {item.title ? item.title : item.name}
                  </h3>
                </button>
              ))}
            </div>
          </div>
          <div className="trending--controls">
            <button className="trending--controls--prev" onClick={prevBtnClick}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="trending--controls--next" onClick={nextBtnClick}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </>
      ) : (
        <div className="loading--trending"></div>
      )}
    </div>
  );
};

export default Trending;
