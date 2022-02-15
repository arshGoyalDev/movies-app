// fetch data
export const fetchData = async (url, functionName, results) => {
  const res = await fetch(url);
  const data = await res.json();

  functionName(results ? data.results : data.genres);
};
