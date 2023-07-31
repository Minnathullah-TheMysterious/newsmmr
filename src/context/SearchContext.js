import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

//custom Hook
const useSearch = () => useContext(SearchContext);

const SearchProvider = ({children}) => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={[search, setSearch]}>
          {children}
        </SearchContext.Provider>
      );
};

export {useSearch, SearchProvider}