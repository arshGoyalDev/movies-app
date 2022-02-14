import { useState, useEffect } from "react";

import { fetchData } from "../utils";

import Card from "./Card";

import "./styles/List.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const List = ({ queryType, query, all }) => {
  const [listData, setListData] = useState("");

  useEffect(() => {
    fetchData(
      `https://api.themoviedb.org/3/${queryType}/${query}?api_key=46f3e66941cef78aa9e97f804729bc67&language=en-US&page=1
    `,
      setListData,
      true, false
    );
  }, []);

  const loadingArray = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="list">
      <div className="list--header">
        <h2 className="list--header--heading">
          {query.replace("_", " ")} {queryType === "tv" ? "tv shows" : "movies"}
        </h2>
        <Link to={`/category/${query.replace("_", "-")}`}>
          <button className="list--header--see-all-btn">
            See all{" "}
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>
        </Link>
      </div>
      <div className="list--body">
        {listData !== ""
          ? listData
              .slice(0, !all ? 7 : listData.length - 1)
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

export default List;
