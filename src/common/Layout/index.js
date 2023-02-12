import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { useStyles } from "./styles";
import { Stack } from "@mui/system";
import Header from "common/Header";

const DashboardLayout = (props) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.layout_container}>
        <Stack className={classes.main_layout}>
          <Outlet />
        </Stack>
      </div>
    </>
  );
};

export default memo(DashboardLayout);
