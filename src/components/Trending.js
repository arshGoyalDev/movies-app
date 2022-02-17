import { useState, useEffect } from "react";

import "./styles/Trending.scss";

import { fetchData } from "../utils";

import TrendingItem from "./TrendingItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Trending = ({ queryType }) => {
  const [trendingData, setTrendingData] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchData(
      `https://api.themoviedb.org/3/trending/${queryType}/day?api_key=${process.env.REACT_APP_API_KEY}`,
      setTrendingData,
      true,
    );
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

  const clickCard = (e) => {
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
            <div className="trending--items--cards">
              {trendingData.map((item) => (
                <button
                  className={`trending--items--cards--card ${
                    trendingData.indexOf(item) === index ? "active" : ""
                  }`}
                  key={item.title ? item.title : item.name}
                  onClick={clickCard}
                  data-index={trendingData.indexOf(item)}
                >
                  <div className="trending--items--cards--card--background">
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
