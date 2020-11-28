import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "red",
  },
  container: {},
});

export default function CreateTask() {
  const classes = useStyles();

  return <div className={classes.root}>Creating Tasks Popup</div>;
}
