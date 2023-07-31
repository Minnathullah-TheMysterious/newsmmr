import { createContext, useState, useContext } from "react";

const CountryContext = createContext();

//custom Hook
const useCountry = () => useContext(CountryContext);

const CountryProvider = ({children}) => {
    const [country, setCountry] = useState('in');

    return (
        <CountryContext.Provider value={[country, setCountry]}>
          {children}
        </CountryContext.Provider>
      );
};

export {useCountry, CountryProvider}