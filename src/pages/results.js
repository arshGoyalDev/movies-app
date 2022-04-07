import "./styles/Results.scss";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useFetch } from "../hooks";

import PosterCard from "../components/cards/PosterCard";
import SimpleLoader from "../components/loaders/SimpleLoader";

const Results = () => {
  const params = useParams();
  const searchQuery = params.searchQuery.replaceAll("-", " ");
  
  const results = {
    movies: useFetch(
      `search/movie?language=en-US&query=${searchQuery}&page=1&include_adult=false&`,
      "results"
    ),
    tv: useFetch(
      `search/tv?language=en-US&query=${searchQuery}&page=1&include_adult=false&`,
      "results"
    ),
  };
  const [loading, setLoading] = useState(true);
  
  const loadingArray = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    if (results.movies && results.tv) {
      setLoading(false);
    }
  }, [results.movies, results.tv]);

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
              results.tv.length !== 0 ? (
                results.tv.map((item) => (
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
