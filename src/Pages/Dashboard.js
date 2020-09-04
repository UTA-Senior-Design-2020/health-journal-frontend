import React from "react";
import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h6"> Content</Typography>
    </div>
    // <Button className={classes.root}>
    //   <div style={{marginRight:"30px"}} >
    //     <DashboardIcon/>
    //   </div>
    //   <div style={{marginRight:"97px"}}>
    //     Dashboard
    //   </div>
    // </Button>
  );
}
