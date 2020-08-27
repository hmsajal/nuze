import React, { useState, useEffect } from "react";

import NewsView from "./newsView";
import useNewsDispatcher from "./useNewsDispatcher";

const News = () => {
  let [url, setUrl] = useState(
    "https://newsapi.org/v2/top-headlines?language=en&sortBy=publishedAt&pageSize=60&apiKey=d526cb8581ac4694a3b24d99b8b224b4"
  );

  let [newsData, setNewsData] = useState([]);

  let dispatchedNews = useNewsDispatcher(url);

  useEffect(() => {
    setNewsData(dispatchedNews);
  }, [dispatchedNews]);

  return <NewsView data={newsData} />;
};

export default News;
