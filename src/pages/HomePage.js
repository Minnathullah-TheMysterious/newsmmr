import React from "react";
import Layout from "../components/layouts/Layout";
import News from "../components/News";
import { useCategory } from "../context/CategoryContext";

const HomePage = () => {
  //context api
  const [category] = useCategory();

  const capitalizeFirstLetter = (word) => {
    const lowercase = word.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  };

  //Manage pageSize from here
  const pageSize = 8;

  return (
    <Layout pageTitle={"Home - NewsMMR"}>
      <div style={{ marginTop: 100 }}>
        <h1 className="text-center mt-4 fw-semibold">
          NewsMMR - Top {capitalizeFirstLetter(category)} Headlines
        </h1>
      </div>
      <div className="container">
        <News pageSize={pageSize} />
      </div>
    </Layout>
  );
};

export default HomePage;
