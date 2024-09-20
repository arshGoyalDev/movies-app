import {useEffect, useState} from "react";
import {useFetch} from "../hooks";

import {loadingArray} from "../utils";

import {PersonCard, BackdropCard} from "./cards";

const List = ({type, query, pages}) => {
  const dataList = useFetch(`${type}/${query}?language=en-US&`, "results");
  const dataListSecond = useFetch(
    `${type}/${query}?language=en-US&page=2&`,
    "results"
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!(dataList && dataListSecond)) return;

    setLoading(false);
  }, [dataList, dataListSecond]);

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
    <>
      {loading ? (
        <div className="px-1">
          <div className="animate-skeleton w-60 h-6 rounded mx-6 md:mx-16 xl:mr-16 xl:ml-10"></div>
          <div className="flex gap-4 px-6 md:px-16 xl:pr-16 xl:pl-10 mt-5 overflow-auto">
            {loadingArray.map((item) =>
              type === "person" ? (
                <div
                  key={item}
                  className="animate-skeleton min-w-[120px] xl:min-w-[150px] h-40 xl:h-48 rounded-2xl"
                ></div>
              ) : (
                <div
                  key={item}
                  className="animate-skeleton min-w-[300px] h-44 rounded-2xl"
                ></div>
              )
            )}
          </div>

          {pages === 2 && (
            <div className="flex gap-4 px-6 md:px-16 xl:pr-16 xl:pl-10 mt-5 overflow-auto">
              {loadingArray.map((item) =>
                type === "person" ? (
                  <div
                    key={item}
                    className="animate-skeleton min-w-[120px] xl:min-w-[150px] h-40 xl:h-48 rounded-2xl"
                  ></div>
                ) : (
                  <div
                    key={item}
                    className="animate-skeleton min-w-[300px] h-44 rounded-2xl"
                  ></div>
                )
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="px-1">
          <h3 className="text-2xl capitalize font-medium mx-6 md:mx-16 xl:mr-16 xl:ml-10">
            {query.replaceAll("_", " ")} {getTitle()}
          </h3>
          <div className="w-full flex gap-4 px-6 md:px-16 xl:pr-16 xl:pl-10 mt-5 overflow-auto">
            {dataList.map((item) =>
              type === "person" ? (
                <PersonCard key={item.id} data={item}/>
              ) : (
                <BackdropCard key={item.id} data={item}/>
              )
            )}
          </div>

          {pages === 2 && (
            <div className="w-full flex gap-4 px-6 md:px-16 xl:pr-16 xl:pl-10 mt-5 overflow-auto">
              {dataListSecond.map((item) =>
                type === "person" ? (
                  <PersonCard key={item.id} data={item}/>
                ) : (
                  <BackdropCard key={item.id} data={item}/>
                )
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

List.defaultProps = {
  pages: 2,
};

export default List;
