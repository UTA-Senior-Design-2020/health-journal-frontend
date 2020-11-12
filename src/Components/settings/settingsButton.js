import React, {useState} from 'react'
import {
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from '@material-ui/icons/Settings';

const navList = [
{ name: "Settings", icon: SettingsIcon, to: "/settings" }
];

const useStyles = makeStyles({
  root: {
    marginTop: "auto"
  },
  title: {
    marginLeft:"30px",
    fontSize: "16px"
  }
});

export default function SettingsButton() {
  const classes = useStyles()
  return (
      <ListItem button className={classes.root} href="/settings" component="a">
        <ListItemIcon>
          <Link to="/settings">
            <SettingsIcon style={{color:"rgba(0, 0, 0, 0.54)"}} />
          </Link>
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    
    )
}
