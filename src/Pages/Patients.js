import React from "react";
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
});

export default function Patients() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Patients
      </Typography>
      <Typography variant="h6">Content</Typography>
    </div>
  );
}
