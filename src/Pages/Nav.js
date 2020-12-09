import React from "react";
import Schedule from "./Schedule";
import NavProfile from "./NavProfile";
import Dashboard from "./Dashboard";
import Messages from "./Messages";
import Patients from "./Patients";
import Tasks from "./Tasks";
import RecentlySeen from "./RecentlySeen";
import SettingsButton from "../Components/settings/settingsButton";
import ClientCard from "../Components/clientCard/ClientCard";
import NavCard from "../Components/navCard/navCard";
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
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PeopleIcon from "@material-ui/icons/People";
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import MessageIcon from '@material-ui/icons/Message';


import { Link } from "react-router-dom";

const navList = [
  { name: "Dashboard", icon: HomeIcon, to: "/" },
  { name: "Messages", icon: MessageIcon, to: "/messages" },
  { name: "Tasks", icon: AssignmentIcon, to: "/tasks" },
  { name: "Patients", icon: PeopleIcon, to: "/patients" }
];

const hrefList = ["inbox", "trash", "spam"];

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
    padding: "2rem 1rem",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  list: {
    '&:hover': {
      backgroundColor: '#E3F2FD'
    },
    '&:hover $child':{
      color: '#2196F3'
    }
  },
  prof: {
    "text-decoration": "none",
    "color": "black"
  }
}));

function Nav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>

            <Box color="text.primary">Create</Box>
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.userInfo}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
              <Avatar alt="Dr. Myers">
                  <AccountCircleIcon />
              </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
              <Grid item xs container direction="row" spacing={2}>
                  <Grid item xs>
                      <Typography variant="h5">
                        <Link to={"/profile"} className={classes.prof}>
                          Dr. Myers
                        </Link>
                      </Typography>
                  </Grid>
              </Grid>
          </Grid>
        </Grid>
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
                className={classes.list}
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
        <Divider />
        <ListItem component="a" href={"https://mail.google.com/mail/u/0/#"+hrefList[0]} className={classes.list} button key={"All mail"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"All mail"} />
        </ListItem>
        <ListItem component="a" href={"https://mail.google.com/mail/u/0/#"+hrefList[1]} className={classes.list} button key={"Trash"}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Trash"} />
        </ListItem>
        <ListItem component="a" href={"https://mail.google.com/mail/u/0/#"+hrefList[2]} className={classes.list} button key={"Spam"}>
          <ListItemIcon>
          <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Spam"} />
        </ListItem>
        
        <Divider />
        <RecentlySeen />
        <SettingsButton/>
      </Drawer>
      <main className={classes.content}>
        {/* Used to move content below top app bar */}
        {/* <div className={classes.toolbar} /> */}
        {props.children}
      </main>
    </div>
  );
}


export default Nav;
