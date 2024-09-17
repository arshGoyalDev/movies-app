import { useState, useEffect } from "react";

function useFetch(restPart, value) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${restPart}api_key=${process.env.REACT_APP_API_KEY}`
      );

      const fetchData = await res.json();
      setData(value ? fetchData[value] : fetchData);
    };

    fetchData();
  }, [restPart, value]);

  return data;
}

export default useFetch;
