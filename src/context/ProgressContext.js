import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

//Custom Hook
const useProgress = () => useContext(ProgressContext);

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={[progress, setProgress]}>
      {children}
    </ProgressContext.Provider>
  );
};

export { useProgress, ProgressProvider };
