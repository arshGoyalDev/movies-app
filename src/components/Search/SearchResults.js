import { useEffect, useState } from "react";

import { useFetch } from "../../hooks";

const SearchResults = ({ searchType, query }) => {
  const data = useFetch(
    `search/${searchType}?language=en-US&query=${query}&page=1&include_adult=false&`,
    "results"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      console.log(data);
      setLoading(true);
    }
  }, [data]);

  const getHeading = () => {
    if (searchType === "movie") {
      return "movies";
    } else if (searchType === "tv") {
      return "tv shows";
    } else if (searchType === "person") {
      return "people";
    }
  };

  return (
    <>
      {loading ? (
        <div>
          <div className="w-40 h-5 bg-gray-300 rounded-md"></div>
          <div className="flex gap-4 mt-3 overflow-hidden">
            <div className="min-w-[200px] h-28 bg-gray-300 rounded-md"></div>
            <div className="min-w-[200px] h-28 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      ) : (
        <>
          {data.length !== 0 && (
            <div>
              <h3 className="text-xl font-medium capitalize">{getHeading()}</h3>
              <div className="flex gap-3 overflow-x-auto pr-10">{}</div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchResults;
