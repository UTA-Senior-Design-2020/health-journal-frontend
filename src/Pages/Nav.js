import React from 'react'
import Actions from './Actions';
import NavProfile from './NavProfile';
import Dashboard from './Dashboard';
import Messages from './Messages';
import Patients from './Patients';
import Tasks from './Tasks';
import RecentlySeen from './RecentlySeen';
import './Nav.css';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width:"200px",
      display:"flex",
      justifyContent:"flex-end",
      alignItems:"flex-start",
      //textAlign:"left",
      flexDirection:"column"
    }
  });

function Nav() {
    const classes = useStyles();
    return (
        <div className="flex-container">
            <div style={{border:"1px solid #E5E5E5"}}>
                <div>
                    <NavProfile/>
                    <hr className="top"></hr>
                </div>
                <div className={classes.root} style={{borderBottom:"1px solid #E5E5E5"}}>
                    <Dashboard/>
                    <Messages/>
                    <Tasks/>
                    <Patients/>
                </div>
                <div >
                    <Actions/>
                </div>
                <div style={{borderTop:"1px solid #E5E5E5"}}>
                    <RecentlySeen/>
                </div>
            </div>
        </div>
    )
}

export default Nav;
