import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
import { CategoryProvider } from "./context/CategoryContext";
import { SearchProvider } from "./context/SearchContext";
import { PageProvider } from "./context/PageContxt";
import { TotalResultsProvider } from "./context/totalResultsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TotalResultsProvider>
    <PageProvider>
      <SearchProvider>
        <CategoryProvider>
          <CountryProvider>
            <Router>
              <App />
            </Router>
          </CountryProvider>
        </CategoryProvider>
      </SearchProvider>
    </PageProvider>
  </TotalResultsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
