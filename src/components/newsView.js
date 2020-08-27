import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./newsView.module.scss";

import SingleNews from "./singleNews";

export default function NewsView(props) {
  return (
    <div className={styles.main}>
      <Grid container spacing={3}>
        {props.data.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <SingleNews item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
