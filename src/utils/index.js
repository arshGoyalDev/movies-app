// fetch data
export const fetchData = async (url, setFunction, results) => {
  const res = await fetch(url);
  const data = await res.json();
  setFunction(results ? data.results : data.genres);
};

export const fetchGenreData = async (query, genreId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`
  );
  const data = await res.json();
  return data;
};

export const fetchMoreData = async (query, genreId, page) => {
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/${query}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
      page + 1
    }&with_genres=${genreId}&with_watch_monetization_types=flatrate`
  );
  let data = await response.json();
  return data;
};
