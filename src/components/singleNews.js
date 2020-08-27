import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styles from "./singleNews.module.scss";

export default function SingleNews({ item }) {
  let [newsDate, setDate] = React.useState("");
  let [logoUrl, setLogoUrl] = React.useState("");

  React.useEffect(() => {
    let date = item.publishedAt.split("T")[0].split("-");
    setDate(date[2] + "-" + date[1] + "-" + date[0]);
  }, [item]);

  React.useEffect(() => {
    let url = item.url.split("//")[1].split("/")[0];
    setLogoUrl(url);
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
          alt={item.source.name}
          height="140"
          image={
            item.urlToImage === null || item.urlToImage === ""
              ? "https://logo.clearbit.com/" + logoUrl + "?size=600"
              : item.urlToImage
          }
          title={item.title}
        />
        <CardContent className={styles.cardContent}>
          <h3>{item.title}</h3>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.cardActions} component="div">
        <div>
          <a
            href={"https://" + item.url.split("//")[1].split("/")[0]}
            target="_blank"
          >
            {item.source.name}
          </a>
        </div>
        <div>{newsDate}</div>
      </CardActions>
    </Card>
  );
}
