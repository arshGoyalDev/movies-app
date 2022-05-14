import { getByTitle } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks";
import PersonCard from "./cards/PersonCard";

const List = ({ type, query, pages }) => {
  const data = useFetch(`${type}/${query}?language=en-US&`, "results");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const getTitle = () => {
    if (type === "person") {
      return "people";
    } else if (type === "movie") {
      return "movies";
    } else if (type === "tv") {
      return "tv shows";
    }
  };

  return (
    <div className="px-1">
      <h3 className="text-2xl capitalize font-medium mx-6 md:mx-16 xl:mr-24 xl:ml-10">
        {query.replaceAll("_", " ")} {getTitle()}
      </h3>
      <div className="scrollbar w-full flex gap-4 px-6 md:px-16 xl:pr-24 xl:pl-10 mt-5 overflow-auto">
        {loading ? (
          ""
        ) : (
          <>
            {type === "person" ? (
              <>
                {data.map((item) => (
                  <PersonCard key={item.id} data={item} />
                ))}
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default List;
