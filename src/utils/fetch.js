// fetch data from url Args: url, setFunction, results
const fetchData = async (url, setFunction, results) => {
  const res = await fetch(url);
  const data = await res.json();
  setFunction(results ? data.results : data.genres);
};

// fetch data for a single genre Args:  query, genreId
const fetchGenreData = async (query, genreId) => {
  const url = `https://api.themoviedb.org/3/discover/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

// fetch more data for a specific genre Args: query, genreId, page
const fetchMoreData = async (query, genreId, page) => {
  const url = `https://api.themoviedb.org/3/discover/${query}?api_key=${
    process.env.REACT_APP_API_KEY
  }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
    page + 1
  }&with_genres=${genreId}&with_watch_monetization_types=flatrate`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// fetch details for given query Args: query, id, setDetails, setCastCrew, setVideos, setRecommended, setLoading
const fetchDetails = async (
  query,
  id,
  setDetails,
  setCastCrew,
  setReviews,
  setVideos,
  setRecommended,
  setLoading
) => {
  let url = `https://api.themoviedb.org/3/${query}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  let urlCastCrew = `https://api.themoviedb.org/3/${query}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  let urlVideos = `https://api.themoviedb.org/3/${query}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  let urlRecommended = `https://api.themoviedb.org/3/${query}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  let urlReviews = `https://api.themoviedb.org/3/${query}/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

  const res = await fetch(url);
  const resCastCrew = await fetch(urlCastCrew);
  const resReviews = await fetch(urlReviews);
  const resVideos = await fetch(urlVideos);
  const resRecommended = await fetch(urlRecommended);

  const data = await res.json();
  const dataCastCrew = await resCastCrew.json();
  const dataReviews = await resReviews.json();
  const dataVideos = await resVideos.json();
  const dataRecommended = await resRecommended.json();

  setDetails(data);
  setCastCrew(dataCastCrew);
  setReviews(dataReviews);
  setVideos(dataVideos.results.reverse());
  setRecommended(dataRecommended.results);
  setLoading(false);
};

// fetch results for given Args: searchQuery, setResults, setLoading
const fetchResults = async (searchQuery, setResults, setLoading) => {
  let urlTv = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchQuery}&include_adult=false`;
  let urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

  const resTv = await fetch(urlTv);
  const resMovies = await fetch(urlMovies);

  const dataTv = await resTv.json();
  const dataMovies = await resMovies.json();

  setResults({
    movies: dataMovies.results,
    tvShows: dataTv.results,
  });
  setLoading(false);
};

const fetchProfileDetails = async (id, setData, setLoading) => {
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const res = await fetch(url);
  const data = await res.json();

  setData(data);
  setLoading(false);
}

export { fetchData, fetchGenreData, fetchMoreData, fetchDetails, fetchResults, fetchProfileDetails };
