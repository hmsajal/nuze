import React, { useState, useEffect } from "react";

import NewsView from "./newsView";
import useNewsDispatcher from "./useNewsDispatcher";

const News = () => {
  let [url, setUrl] = useState(
    "https://gnews.io/api/v3/top-news?&token=306497a1a24d2a03ed814913727ec6b0"
  );

  let [newsData, setNewsData] = useState([]);

  let dispatchedNews = useNewsDispatcher(url);

  useEffect(() => {
    setNewsData(dispatchedNews);
  }, [dispatchedNews]);

  return <NewsView data={newsData} />;
};

export default News;
