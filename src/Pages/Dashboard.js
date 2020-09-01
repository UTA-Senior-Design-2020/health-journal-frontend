import React from 'react'
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    color: "rgba(0, 0, 0, 0.54)",
    fontFamily:"Arial",
    textTransform: "none",
    width:"100%"
  }

});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      <div style={{marginRight:"30px"}} >
        <DashboardIcon/>
      </div>
      <div style={{marginRight:"97px"}}>
        Dashboard            
      </div>
    </Button>
    
  )
}
