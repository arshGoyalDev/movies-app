// fetch data
export const fetchData = async (url, setFunction, results) => {
  const res = await fetch(url);
  const data = await res.json();

  setFunction(results ? data.results : data.genres);
};
