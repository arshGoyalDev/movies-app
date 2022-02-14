
// fetch data
export const fetchData = async (url, functionName) => {
  const res = await fetch(url);
  const data = await res.json();
  functionName(data.results);
}