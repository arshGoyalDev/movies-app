
// import { useFetch } from "../../hooks";
import { SearchBackdropCard } from "../cards";

const SearchResults = ({ heading, loading, data }) => {
  return (
    <>
      {loading ? (
        <div>
          <div className="w-40 h-5 bg-gray-300 rounded-md"></div>
          <div className="flex gap-4 mt-3 overflow-hidden">
            {heading === "People" ? (
              <>
                <div className="min-w-[130px] h-40 bg-gray-300 rounded-md"></div>
                <div className="min-w-[130px] h-40 bg-gray-300 rounded-md"></div>
                <div className="min-w-[130px] h-40 bg-gray-300 rounded-md"></div>
              </>
            ) : (
              <>
                <div className="min-w-[200px] h-28 bg-gray-300 rounded-md"></div>
                <div className="min-w-[200px] h-28 bg-gray-300 rounded-md"></div>
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
                heading === "People" ? ("") : (
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
