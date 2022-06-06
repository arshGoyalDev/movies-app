
// import { useFetch } from "../../hooks";
import { SearchBackdropCard, SearchPersonCard } from "../cards";

const SearchResults = ({ heading, loading, data }) => {
  return (
    <>
      {loading ? (
        <div>
          <div className="animate-skeleton-search w-40 h-5 rounded-md"></div>
          <div className="flex gap-4 mt-3 overflow-hidden">
            {heading === "People" ? (
              <>
                <div className="animate-skeleton-search min-w-[130px] h-40 rounded-md"></div>
                <div className="animate-skeleton-search min-w-[130px] h-40 rounded-md"></div>
                <div className="animate-skeleton-search min-w-[130px] h-40 rounded-md"></div>
              </>
            ) : (
              <>
                <div className="animate-skeleton-search min-w-[200px] h-28 rounded-md"></div>
                <div className="animate-skeleton-search min-w-[200px] h-28 rounded-md"></div>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          {data.length !== 0 && (
            <div>
              <h3 className="text-xl font-medium capitalize">{heading}</h3>
              <div className="flex gap-3 pr-10 mt-3 overflow-x-auto">{
                heading === "People" ? (
                  data.map((itemData) => (
                    <SearchPersonCard key={itemData.id} data={itemData} />
                  ))
                ) : (
                  <>
                  {data.map((itemData) => (
                    <SearchBackdropCard key={itemData.id} data={itemData} />
                  ))}
                  </>
                )
              }</div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchResults;
