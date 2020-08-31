import React from 'react'
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
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

export default function Patients() {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      <Typography className={classes.typography}>
        <PeopleIcon/>
        Patients
      </Typography>
    </Button>
    
  )
}

