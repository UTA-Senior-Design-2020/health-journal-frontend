import React from "react";
import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DashBoardAlertsCard from "../Components/dashboardAlertsCard/DashBoardAlertsCard"
import ClientCard from "../Components/clientCard/ClientCard"
import PeopleIcon from '@material-ui/icons/People';
import AlertIcon from '@material-ui/icons/Report';

const useStyles = makeStyles({
  root: {},
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography> 
      <div className={classes.row}>
        <DashBoardAlertsCard cardName="Patients" amount="8" icon={PeopleIcon} />
        <DashBoardAlertsCard cardName="Reports" amount="4" icon={AlertIcon} />
      </div>
      <ClientCard CardTitle="Current Client" BackgroundColor="#2196F3" TextColor="#FFFFFF" PatientName="Nicci Troiani" PhoneNumber="(555)-555-5555" AppointmentStartTime="2:45 PM"/>
      <ClientCard CardTitle="Upcoming" BackgroundColor="#FFFFFF" TextColor="rgba(0, 0, 0, 0.87)" PatientName="Nicci Troiani" PhoneNumber="(555)-555-5555" AppointmentStartTime="2:45 PM"/>
    </div>
  );
}


