import React from 'react'
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
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

export default function Messages() {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      <div style={{marginRight:"30px"}} >
        <MessageIcon/>
      </div>
      <div style={{marginRight:"102px"}}>
        Messages            
      </div>
    </Button>
    
  )
}

