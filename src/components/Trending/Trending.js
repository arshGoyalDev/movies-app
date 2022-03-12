import { useState, useEffect } from "react";

import "./styles/Trending.scss";

import { fetchData } from "../../utils";

import TrendingItem from "./TrendingItem";
import SimpleLoader from "../loaders/SimpleLoader";
import { TrendingCard } from "../cards";

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
      true
    );
  }, [queryType]);

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
                <TrendingCard
                  key={item.id}
                  data={item}
                  trendingData={trendingData}
                  index={index}
                  setIndex={setIndex}
                />
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
        <SimpleLoader className="loading--trending" />
      )}
    </div>
  );
};

export default Trending;
