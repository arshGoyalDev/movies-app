import "./styles/Results.scss";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchResults } from "../utils";

import PosterCard from "../components/cards/PosterCard";
import SimpleLoader from "../components/loaders/SimpleLoader";

const Results = () => {
  const params = useParams();
  const searchQuery = params.searchQuery.replaceAll("-", " ");
  const [results, setResults] = useState({
    movies: [],
    tvShows: [],
  });
  const [loading, setLoading] = useState(true);
  const loadingArray = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    fetchResults(searchQuery, setResults, setLoading);
    setLoading(true);
  }, [searchQuery, params]);

  return (
    <div className="results">
      <h1>
        Results for <span>{searchQuery}</span>
      </h1>

      <div className="results--container">
        <div className="results--container--result">
          <h2>Movies</h2>
          <div className="cards-container">
            {!loading ? (
              results.movies.length !== 0 ? (
                results.movies.map((item) => (
                  <PosterCard key={item.id} data={item} />
                ))
              ) : (
                <p>😔 No Results</p>
              )
            ) : (
              loadingArray.map((key) => (
                <SimpleLoader key={key} className="loading--card--poster" />
              ))
            )}
          </div>
        </div>
        <div className="results--container--result">
          <h2>Tv Shows</h2>
          <div className="cards-container">
            {!loading ? (
              results.tvShows.length !== 0 ? (
                results.tvShows.map((item) => (
                  <PosterCard key={item.id} data={item} />
                ))
              ) : (
                <p>😔 No Results</p>
              )
            ) : (
              loadingArray.map((key) => (
                <SimpleLoader key={key} className="loading--card--poster" />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
