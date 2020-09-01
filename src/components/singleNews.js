import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styles from "./singleNews.module.scss";

export default function SingleNews({ item }) {
  let [logoUrl, setLogoUrl] = React.useState("");
  let [newsDate, setNewsDate] = React.useState("");
  let [newsTime, setNewsTime] = React.useState("");

  React.useEffect(() => {
    let url = item.source.url.split("//")[1].split("/")[0];
    setLogoUrl(url);
  }, [item]);

  React.useEffect(() => {
    let dtArray = item.publishedAt.split(" ");
    setNewsDate(dtArray[0]);
    setNewsTime(dtArray[1]);
  }, [item]);

  return (
    <Card className={styles.cardStyle}>
      <CardActionArea
        target="_blank"
        component="a"
        href={item.url}
        className={styles.actionArea}
      >
        <CardMedia
          component="img"
          alt={item.image}
          height="140"
          image={
            item.image === null || item.image === ""
              ? "https://logo.clearbit.com/" + logoUrl + "?size=600"
              : item.image
          }
          title={item.title}
        />
        <CardContent className={styles.cardContent}>
          <h3>{item.title}</h3>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.cardActions} component="div">
        <div>
          <a href={item.source.url} target="_blank">
            {item.source.name}
          </a>
        </div>
        <div>
          {newsDate
            .split("-")
            .reverse()
            .map((item, i) => (i === 2 ? item : item + "-"))}
        </div>
      </CardActions>
    </Card>
  );
}
