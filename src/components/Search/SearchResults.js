// import { useFetch } from "../../hooks";
import { loadingArray } from "../../utils";
import { SearchBackdropCard, SearchPersonCard } from "../cards";

const SearchResults = ({ heading, loading, data }) => {
  return (
    <>
      {loading ? (
        <div>
          <div className="animate-skeleton-search ml-6 xl:ml-9 w-40 h-5 rounded-md"></div>
          <div className="flex gap-4 mt-3 overflow-auto px-6 xl:px-9">
            {loadingArray.map((item) =>
              heading === "People" ? (
                <div
                  key={item}
                  className="animate-skeleton-search min-w-[130px] h-44 rounded-md"
                ></div>
              ) : (
                <div
                  key={item}
                  className="animate-skeleton-search min-w-[240px] h-32 rounded-md"
                ></div>
              )
            )}
          </div>
        </div>
      ) : (
        <>
          {data.length !== 0 && (
            <div>
              <h3 className="text-xl font-medium px-6 xl:px-9 capitalize">{heading}</h3>
              <div className="flex gap-3 pr-10 mt-3 overflow-x-auto px-6 xl:px-9">
                {heading === "People" ? (
                  data.map((itemData) => (
                    <SearchPersonCard key={itemData.id} data={itemData} />
                  ))
                ) : (
                  <>
                    {data.map((itemData) => (
                      <SearchBackdropCard key={itemData.id} data={itemData} />
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchResults;
