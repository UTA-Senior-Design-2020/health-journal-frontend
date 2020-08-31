import React from 'react'
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    color: "#2196F3",
    fontFamily:"Arial",
    textTransform: "none"
  },
  typography: {
    align:"left"
  }

});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      <Typography className={classes.typography}>
        <DashboardIcon/>
        Dashboard
      </Typography>
    </Button>
    
  )
}
