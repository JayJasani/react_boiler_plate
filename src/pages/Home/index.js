import React from "react";
import { useStyles } from "./styles";

function Home() {
  const classes = useStyles();
  return <div className={classes.home_container}>HOME</div>;
}

export default Home;
