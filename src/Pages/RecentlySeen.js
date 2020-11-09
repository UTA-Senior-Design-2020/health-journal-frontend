import React from 'react'
import NavCard from "../Components/navCard/navCard";
import {Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        paddingTop:"20px", 
        color: "#9E9E9E", 
        paddingLeft:"15px",
        fontSize: "15px"
    }
  });

export default function RecentlySeen() {
    const classes = useStyles();
    var patients = ['George Fields','Jane Doe', 'Suk MaDeek'];
    return (
        <div >
            <Typography className={classes.title}>Recently Seen</Typography>
            <NavCard CardTitle="word" PatientName={patients[0]} AppointmentStartTime="3:00 PM"/>
            <NavCard CardTitle="word" PatientName={patients[1]} AppointmentStartTime="1:45 PM"/>
        </div>
    )
}
