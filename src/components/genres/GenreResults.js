import { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroller";

import { useParams } from "react-router-dom";

import { PosterCard } from "../cards";

import { loadingArray } from "../../utils";

const GenreResults = () => {
  const { type, genreId } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchFirstData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`
    );
    const fetchedData = await res.json();

    setData(fetchedData.results);
    setTotalResults(fetchedData.total_results);
    setLoading(false);
  };

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/${type}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
        page + 1
      }&with_genres=${genreId}&with_watch_monetization_types=flatrate`
    );
    const fetchedData = await res.json();

    setData([...data, ...fetchedData.results]);
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);
    fetchFirstData();
    // eslint-disable-next-line
  }, [genreId]);

  // useEffect(() => {
  //   fetchFirstData();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      {loading ? (
        <div className="mt-10 px-6 md:px-16 xl:pr-24 xl:pl-10">
          <div className="w-52 h-6 rounded-md animate-skeleton"></div>
          <div className="flex flex-wrap gap-3 mt-5">
            {loadingArray.map((item) => (
              <div
                key={item}
                className="relative min-w-[150px] sm:min-w-[170px] h-56 sm:h-60 rounded-xl animate-skeleton"
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10 px-6 md:px-16 xl:pr-24 xl:pl-10">
          <h2 className="text-xl capitalize font-medium">
            {type === "movie" ? "movies" : "tv shows"}
          </h2>

          <InfiniteScroll
            pageStart={1}
            loadMore={fetchData}
            hasMore={data.length !== totalResults}
            loader={
              <div className="font-semibold text-center text-lg my-10" key={0}>
                Loading ...
              </div>
            }
            useWindow={true}
            // getScrollParent={() => this.scrollParentRef}

          >
            <div className="flex flex-wrap gap-5 mt-5">
              {data.map((item) => (
                <PosterCard key={item.id} data={item} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

export default GenreResults;
