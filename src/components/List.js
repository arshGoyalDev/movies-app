import { useState, useEffect } from "react";

import "./styles/List.scss";

import { BackdropCard } from "./cards";
import { SimpleLoader } from "./loaders";

import { useFetch } from "../hooks";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const List = ({ heading, queryType, query, all, page }) => {
  const listData = useFetch(
    `${queryType}/${query}?language=en-US&page=${page}&`,
    "results"
  );
  const [loading, setLoading] = useState(true);
  const loadingArray = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    if (listData) {
      setLoading(false);
    }
  }, [listData]);

  return (
    <div className={`list ${!heading ? "list--full" : ""}`}>
      {heading && (
        <div className="list--header">
          <h2 className="list--header--heading">
            {query.replaceAll("_", " ")}{" "}
            {queryType === "movie" ? "movies" : "tv shows"}
          </h2>
          {!all && (
            <Link to={`/${queryType}`}>
              <button className="list--header--see-all-btn">
                See all{" "}
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </Link>
          )}
        </div>
      )}
      <div className="list--body">
        {!loading
          ? listData
              .slice(0, !all ? 7 : listData.length)
              .map((item) => (
                <BackdropCard
                  key={item.title ? item.title : item.name}
                  data={item}
                />
              ))
          : loadingArray.map((item) => (
              <SimpleLoader key={item} className="loading--card--backdrop" />
            ))}
      </div>
    </div>
  );
};

List.defaultProps = {
  heading: true,
  page: 1,
  defined: false,
};

export default List;
