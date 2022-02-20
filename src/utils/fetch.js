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

// fetch details for given query Args: query, id, setFunction, setLoading
const fetchDetails = async (
  query,
  id,
  setDetails,
  setSimilar,
  setVideos,
  setCastCrew,
  setLoading
) => {
  let url = `https://api.themoviedb.org/3/${query}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  let urlSimilar = `https://api.themoviedb.org/3/${query}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  let urlVideos = `https://api.themoviedb.org/3/${query}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  let urlCastCrew = `https://api.themoviedb.org/3/${query}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const res = await fetch(url);
  const data = await res.json();
  setDetails(data);

  const resSimilar = await fetch(urlSimilar);
  const dataSimilar = await resSimilar.json();
  setSimilar(dataSimilar.results);

  const resVideos = await fetch(urlVideos);
  const dataVideos = await resVideos.json();
  setVideos(dataVideos.results);

  const resCastCrew = await fetch(urlCastCrew);
  const dataCastCrew = await resCastCrew.json();
  setCastCrew(dataCastCrew);

  setLoading(false);
};

export { fetchData, fetchGenreData, fetchMoreData, fetchDetails };