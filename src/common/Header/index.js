import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";

const Header = (props) => {
  const classes = useStyles();

  return (
    <Stack className={classes.header_main}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 4,
          my: "auto",
        }}
      >
        <Typography sx={{ color: "white", fontSize: 18 }}>React</Typography>
        <Stack className={classes.list_nav} sx={{ flexDirection: "row" }}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default memo(Header);
