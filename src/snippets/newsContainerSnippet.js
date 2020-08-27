//code for news container component. for excluding a source
useEffect(() => {
  async function filterNews() {
    setNewsData(
      await dispatchedNews.filter((item) => item.source.id !== "buzzfeed")
    );
  }
  filterNews();
}, [dispatchedNews]);
//---------
