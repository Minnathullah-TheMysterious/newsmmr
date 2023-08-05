import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import { useCountry } from "../context/CountryContext";
import { useCategory } from "../context/CategoryContext";
import { useSearch } from "../context/SearchContext";
import { usePage } from "../context/PageContxt";
import { useTotalResults } from "../context/totalResultsContext";
import { useProgress } from "../context/ProgressContext";

const News = ({ pageSize }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  //context api
  const [country] = useCountry();
  const [category] = useCategory();
  const [search] = useSearch();
  const [page, setPage] = usePage();
  const [totalResults, setTotalResults] = useTotalResults();
  const [progress, setProgress] = useProgress();

  const updateNews = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${search}&page=1&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      setProgress(progress + 20);
      setLoading(true);
      const data = await fetch(url);
      setProgress(progress + 50);
      const parsedData = await data.json();
      setProgress(progress + 80);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setProgress(progress + 100);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [country, category, search, pageSize]);

  const fetchMoreData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${search}&page=${page + 1}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      setPage(page + 1);
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles && articles.length}
        next={fetchMoreData}
        hasMore={articles && articles.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        <div className="row">
          {articles?.map((news, index) => (
            <div key={index} className="col-md-3">
              <NewsItem
                newsDescription={
                  news.description
                    ? news.description
                    : 'Click on the "Read More" button to read the article'
                }
                newsImageUrl={news.urlToImage ? news.urlToImage : "logo512.png"}
                newsTitle={news.title}
                newsUrl={news.url}
                newsSource={news.source.name}
                newsAuthor={news.author ? news.author : "Unknown"}
                newsDate={news.publishedAt}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 8,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
