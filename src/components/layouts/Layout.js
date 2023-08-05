import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import TopLoadingBar from "./TopLoadingBar";

const Layout = ({
  pageTitle,
  pageDescription,
  pageAuthor,
  pageKeywords,
  children,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />
        <meta name="author" content={pageAuthor} />
        <meta name="keywords" content={pageKeywords} />
        <title>{pageTitle}</title>
      </Helmet>
      <TopLoadingBar />
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  pageTitle: "NewsMMR",
  pageAuthor: "Minnathullah Rahmani",
  pageDescription: "A news app created for development using react",
  pageKeywords: "NewsMMr news, sports, entertainment",
};

export default Layout;
