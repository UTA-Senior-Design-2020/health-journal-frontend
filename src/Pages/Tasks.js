import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    border: "solid blue 1px",
  },
});

export default function Tasks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>
      <Typography variant="h6"> Content</Typography>
    </div>
  );
}
