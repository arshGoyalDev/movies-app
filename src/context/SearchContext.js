import { useState, createContext } from "react";

const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [voiceSearch, setVoiceSearch] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        searchQuery,
        setSearchQuery,
        voiceSearch,
        setVoiceSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext };

export default SearchProvider;
