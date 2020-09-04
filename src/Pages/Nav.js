import React from "react";
import Schedule from "./Schedule";
import NavProfile from "./NavProfile";
import Dashboard from "./Dashboard";
import Messages from "./Messages";
import Patients from "./Patients";
import Tasks from "./Tasks";
import RecentlySeen from "./RecentlySeen";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./Nav.css";
import { makeStyles } from "@material-ui/core/styles";
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
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PeopleIcon from "@material-ui/icons/People";

import { Link } from "react-router-dom";

const navList = [
  { name: "Dashboard", icon: HomeIcon, to: "/" },
  { name: "Messages", icon: MailIcon, to: "/messages" },
  { name: "Tasks", icon: ListIcon, to: "/tasks" },
  { name: "Patients", icon: PeopleIcon, to: "/patients" },
];

// TODO
const actionList = [];
const recentlySeen = [];

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: "#FFFFFF",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  userInfo: {
    ...theme.mixins.toolbar,
    border: "solid red 1px",
    padding: "2rem 1rem",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Nav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {/* TODO */}
            <Box color="text.primary">Create</Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.userInfo}>
          <div></div>
          <Typography variant="h5">Dr. Young</Typography>
        </div>
        <Divider />
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
                    <Icon />
                  </Link>
                </ListItemIcon>
                <ListItemText primary={navItem.name} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Nav;
