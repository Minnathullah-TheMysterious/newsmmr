import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

//Custom Hook
const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("general");

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
};

export { useCategory, CategoryProvider };
