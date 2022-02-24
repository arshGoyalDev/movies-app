import "./styles/Results.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchResults } from "../utils/fetch";
import PosterCard from "../components/cards/PosterCard";

const Results = () => {
  const params = useParams();
  const searchQuery = params.searchQuery.replace("q=", "").replaceAll("-", " ");
  const [results, setResults] = useState({
    movies: [],
    tvShows: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResults(searchQuery, setResults, setLoading);
  }, [searchQuery, params]);

  return (
    <div className="results">
      <h1>
        Results for <span>{searchQuery}</span>
      </h1>

      {!loading ? (
        <div className="results--container">
          <div className="results--container--result">
            <h2>Movies</h2>
            <div className="cards-container">
              {results.movies.length !== 0 ? (
                results.movies.map((item) => (
                  <PosterCard key={item.id} data={item} />
                ))
              ) : (
                <p>No Results</p>
              )}
            </div>
          </div>
          <div className="results--container--result">
            <h2>Tv Shows</h2>
            <div className="cards-container">
              {results.tvShows.length !== 0 ? (
                results.tvShows.map((item) => (
                  <PosterCard key={item.id} data={item} />
                ))
              ) : (
                <p>No Results</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Results;
