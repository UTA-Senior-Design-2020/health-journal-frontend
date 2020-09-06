import React from "react";
import Button from "@material-ui/core/Button";
import MessageIcon from "@material-ui/icons/Message";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
});

export default function Messages() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Messages
      </Typography>
      <Typography variant="h6">Content</Typography>
    </div>
  );
}
