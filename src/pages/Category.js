import "./styles/Category.scss";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchData } from "../utils";

import Categories from "../components/Categories";
import PosterCard from "../components/cards/PosterCard";

const Category = () => {
  const [data, setData] = useState("");
  const params = useParams();

  const loadingArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  useEffect(() => {
    fetchData(
      `https://api.themoviedb.org/3/discover/${params.query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${params.categoryId}&with_watch_monetization_types=flatrate`,
      setData,
      true
    );
  }, [params]);

  return (
    <>
      <Categories query={params.query === "movie" ? "movie" : "tv"} />

      <div className="category">
        <h2>{params.query === "movie" ? " movies" : " tv shows"}</h2>
        <div className="category--cards">
          {data !== ""
            ? data.map((item) => (
                <PosterCard
                  key={item.title ? item.title : item.name}
                  data={item}
                />
              ))
            : loadingArray.map((item) => (
                <div key={item} className="loading--card--poster"></div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Category;
