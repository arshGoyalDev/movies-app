import { useState, useEffect } from "react";

import "./styles/List.scss";

import { fetchData } from "../utils";

import Card from "./Card";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const List = ({ heading, queryType, query, all, page }) => {
  const [listData, setListData] = useState("");
  const loadingArray = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    fetchData(
      `https://api.themoviedb.org/3/${queryType}/${query}?api_key=46f3e66941cef78aa9e97f804729bc67&language=en-US&page=${page}
    `,
      setListData,
      true
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`list ${!heading ? "list--full" : ""}`}>
      {heading && (
        <div className="list--header">
          <h2 className="list--header--heading">
            {query.replaceAll("_", " ")}{" "}
            {queryType === "tv" ? "tv shows" : "movies"}
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
        {listData !== ""
          ? listData
              .slice(0, !all ? 7 : listData.length)
              .map((item) => (
                <Card key={item.title ? item.title : item.name} data={item} />
              ))
          : loadingArray.map((item) => (
              <div key={item} className="loading--card"></div>
            ))}
      </div>
    </div>
  );
};

List.defaultProps = {
  heading: true,
  page: 1,
}

export default List;
