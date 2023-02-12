import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  header_main: {
    height: "80px",
    marginLeft: "auto",
    background: "black",
    "& a": {
      textDecoration: "none",
      color: "white",
      margin: "0 20px",
    },
  },
}));
