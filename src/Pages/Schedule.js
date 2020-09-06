import React from 'react'
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      color: "rgba(0, 0, 0, 0.54)",
      fontFamily:"Arial",
      textTransform: "none",
      width:"100%"
    },
    typography: {
        marginTop: "10px",
        marginLeft: "10px",
        marginBottom: "20px",
        color: "#9E9E9E"
    }

  
  });
  
  export default function Schedule() {
    const classes = useStyles();
    return (
    <div>
        <Typography className={classes.typography}>
            Actions
        </Typography>
        <div>
            <Button className={classes.root}>
                <div style={{marginRight:"30px"}} >
                <SettingsIcon/>
                </div>
                <div style={{marginRight:"105px"}}>
                Schedule            
                </div>
            </Button>
        </div>
        <Button className={classes.root}>
                <div style={{marginRight:"30px"}} >
                <NotificationsIcon/>
                </div>
                <div style={{marginRight:"100px"}}>
                Broadcast            
                </div>
            </Button>
    </div>
    
    )
  }
  
