import React from "react";
import axios from "axios";

export default function useNewsDispatcher(url) {
  let [data, setData] = React.useState([]);
  let [errMsg, setErrMsg] = React.useState("");

  React.useEffect(() => {
    axios({
      method: "get",
      url: url,
    })
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        setErrMsg("News not found. Something is wrong");
        setData([errMsg]);
      });
  }, [url]);

  return data;
}
