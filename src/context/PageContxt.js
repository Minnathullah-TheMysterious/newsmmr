import { createContext, useContext, useState } from "react";

const pageContext = createContext();

//custom Hook
const usePage = () => useContext(pageContext);

const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  return (
    <pageContext.Provider value={[page, setPage]}>
      {children}
    </pageContext.Provider>
  );
};

export {usePage, PageProvider}