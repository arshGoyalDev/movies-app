// fetch data
export const fetchData = async (url, functionName, results, genres) => {
  const res = await fetch(url);
  const data = await res.json();

  results && functionName(data.results);
  genres && functionName(data.genres);
};
