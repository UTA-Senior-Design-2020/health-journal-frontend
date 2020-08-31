import React from 'react'
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Actions() {
    return (
        <div className>
            <div style={{paddingTop:"20px", color: "#9E9E9E", paddingLeft:"10px"}}>
                Actions
            </div>
            <Button className="length">
                <div>
                    <SettingsIcon style={{fill: "gray"}}/>
                </div>
                <div className="title">
                    Schedule
                </div>
            </Button>
            <Button className="length">
                <div>
                    <NotificationsIcon style={{fill: "gray"}}/>
                </div>
                <div className="title">
                    Broadcast
                </div>
            </Button>
        </div>
    )
}

export default Actions;
