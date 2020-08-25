import React from 'react'
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// CSS Should be done this way
const useStyles = makeStyles({
  root: {
    background: "#FBFCFD",
  },
});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h2">Dashboard</Typography>
    </Container>
  );
}
