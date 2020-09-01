import React from 'react'
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
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

export default function Tasks() {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      <div style={{marginRight:"30px"}} >
        <AssignmentIcon/>
      </div>
      <div style={{marginRight:"130px"}}>
        Tasks            
      </div>
    </Button>
    
  )
}
