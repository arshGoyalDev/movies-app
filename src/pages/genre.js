import "./styles/Genre.scss";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Genres from "../components/Genres";
import { PosterCard } from "../components/cards";
import { SimpleLoader, InfiniteLoader } from "../components/loaders";

import InfiniteScroll from "react-infinite-scroll-component";

const Genre = ({ setScrollTop }) => {
  const { query, genreId } = useParams();

  const [loading, setLoading] = useState(true);
  const [genreData, setGenreData] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  const loadingArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  useEffect(() => {
    setScrollTop(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/discover/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`;

      const res = await fetch(url);
      const data = await res.json();

      setTotalResults(data.total_results);
      setGenreData(data.results);
      setLoading(false);
    };

    fetchData();
  }, [query, genreId]);

  const InfiniteScrollFunction = async () => {
    const url = `https://api.themoviedb.org/3/discover/${query}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      page + 1
    }&with_genres=${genreId}&with_watch_monetization_types=flatrate`;

    const res = await fetch(url);
    const fetchedData = await res.json();
    setGenreData([...genreData, ...fetchedData.results]);
    setPage(page + 1);
  };

  return (
    <div>
      <Genres
        query={query === "movie" ? "movie" : "tv"}
        selected={true}
        id={genreId}
      />

      <div className="genre">
        <h2>{query === "movie" ? " movies" : " tv shows"}</h2>
        <InfiniteScroll
          dataLength={genreData.length}
          next={InfiniteScrollFunction}
          hasMore={genreData.length !== totalResults}
          loader={<InfiniteLoader />}
        >
          <div className="genre--cards">
            {!loading
              ? genreData.map((item) => (
                  <PosterCard key={item.id} data={item} />
                ))
              : loadingArray.map((item) => (
                  <SimpleLoader key={item} className="loading--card--poster" />
                ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Genre;
