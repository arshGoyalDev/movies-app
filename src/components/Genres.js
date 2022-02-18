import { useEffect, useState } from "react";

import "./styles/Genres.scss";

import { fetchData } from "../utils";

import { Link } from "react-router-dom";

const Genres = ({ query, selected, id }) => {
  const [genreList, setGenreList] = useState("");

  useEffect(() => {
    fetchData(
      `https://api.themoviedb.org/3/genre/${query}/list?api_key=46f3e66941cef78aa9e97f804729bc67&language=en-US`,
      setGenreList,
      false
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div className="genres">
      <h2>Genres</h2>
      <div>
        {genreList !== "" ? (
          genreList.map((genre) => (
            <Link key={genre.id} to={`/genre/${query}/${genre.id}`}>
              <button className={`genres--genre ${selected ? (genre.id === parseInt(id) ? "selected" : "") : ""}`}>
                {genre.name}
              </button>
            </Link>
          ))
        ) : (
          <div className="loading--genre"></div>
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
