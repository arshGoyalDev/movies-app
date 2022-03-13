import { useEffect, useState } from "react";

import "./styles/Genres.scss";

import { useFetch } from "../hooks";

import { Link } from "react-router-dom";

import SimpleLoader from "./loaders/SimpleLoader";

const Genres = ({ query, selected, id }) => {
  const genreData = useFetch(`genre/${query}/list?language=en-US&`, 'genres');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (genreData) {
      setLoading(false);
    }
  }, [genreData]);

  return (
    <div className="genres">
      <h2>Genres</h2>
      <div>
        {!loading ? (
          genreData.map((genre) => (
            <Link key={genre.id} to={`/genre/${query}/${genre.id}`}>
              <button className={`genres--genre ${selected ? (genre.id === parseInt(id) ? "selected" : "") : ""}`}>
                {genre.name}
              </button>
            </Link>
          ))
        ) : (
          <SimpleLoader className="loading--genre" />
        )}
      </div>
    </div>
  );
};

Genres.defaultProps = {
  query: "movie",
  selected: false,
  id: 27,
}

export default Genres;
