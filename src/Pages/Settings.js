import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
import { Link } from "react-router-dom";

const navList = [
{ name: "Settings", icon: SettingsIcon, to: "/settings" }
];


export default function Settings() {
    return (
        <div>
            <List>
          {navList.map((navItem) => {
            let Icon = navItem.icon;
            return (
              <ListItem
                button
                key={navItem.name}
                component="a"
                href={navItem.to}
              >
                <ListItemIcon>
                  <Link to={navItem.to}>
                    <Icon style={{color:"rgba(0, 0, 0, 0.54)"}} />
                  </Link>
                </ListItemIcon>
                <ListItemText primary={navItem.name} />
              </ListItem>
            );
          })}
        </List>
        </div>
    )
}
