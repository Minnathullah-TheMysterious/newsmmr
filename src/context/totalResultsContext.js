import { createContext, useContext, useState } from "react";

const totalResultsContext = createContext();

//custom hook
const useTotalResults = () => useContext(totalResultsContext);

const TotalResultsProvider = ({ children }) => {
  const [totalResults, setTotalResults] = useState();

  return (
    <totalResultsContext.Provider value={[totalResults, setTotalResults]}>
      {children}
    </totalResultsContext.Provider>
  );
};

export { useTotalResults, TotalResultsProvider };
