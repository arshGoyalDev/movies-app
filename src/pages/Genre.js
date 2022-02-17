import "./styles/Genre.scss";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchGenreData } from "../utils";

import Genres from "../components/Genres";
import PosterCard from "../components/cards/PosterCard";

import InfiniteScroll from "react-infinite-scroll-component";

const Genre = () => {
  const [data, setData] = useState("");
  const [resultsCount, setResultsCount] = useState("");
  const [page, setPage] = useState(1);
  const params = useParams();

  const loadingArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  useEffect(() => {
    fetchGenreData(params.query, params.genreId).then((fetchedData) => {
      setResultsCount(fetchedData.total_results);
      setData(fetchedData.results);
      console.log(fetchedData);
    });
  }, [params]);

  const fetchMoreData = async () => {
    let url = `https://api.themoviedb.org/3/discover/${params.query}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      page + 1
    }&with_genres=${params.genreId}&with_watch_monetization_types=flatrate`;

    setPage(page + 1);
    let response = await fetch(url);
    let fetchedData = await response.json();

    setData([...data, ...fetchedData.results]);
    // setTotalArticleCount(data.totalResults);
  };

  return (
    <>
      <Genres query={params.query === "movie" ? "movie" : "tv"} />

      <div className="category">
        <h2>{params.query === "movie" ? " movies" : " tv shows"}</h2>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length !== resultsCount}
          loader={<p>Loading...</p>}
        >
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
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Genre;
