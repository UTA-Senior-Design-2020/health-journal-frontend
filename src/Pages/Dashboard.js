import React from "react";
import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DashBoardAlertsCard from "../Components/dashboardAlertsCard/DashBoardAlertsCard";
import ClientCard from "../Components/clientCard/ClientCard";
import PeopleIcon from '@material-ui/icons/People';
import AlertIcon from '@material-ui/icons/Report';
import WeeklyOverviewCard from "../Components/weeklyOverviewCard/WeeklyOverviewCard";
import TodoCard from "../Components/todoCard/TodoCard";


const useStyles = makeStyles({
  root: {},
  alerts: {
    float: 'left',
    width: '220px',
    marginLeft: '10px',
    marginBottom: '36px'
  },
  box: {
    display: 'inline-block',
    height: '650px',
    width: '470px',
    marginRight: '0px',
    verticalAlign: 'top'
  },
  current: {
   marginTop: '20px'
  },
  weeklyOverviewCard: {
    display: 'inline-block',
    height: '595px',
    width: '470px',
    marginRight: '0px',
    verticalAlign: 'top'
  },
  todoCard: {
    display: 'inline-block',
    height: '300px',
    width: '350px',
    marginRight: '0px',
    verticalAlign: 'top'
  }

});

export default function Dashboard() {
  const classes = useStyles();
  var patients = ['Nicci Troiani','Thom Yorke'];
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <div className={classes.box}>
        <div className={classes.alerts}>
          <DashBoardAlertsCard  cardName="Patients" amount="8" icon={PeopleIcon} />
        </div>
        <div className={classes.alerts}>
          <DashBoardAlertsCard cardName="Reports" amount="4" icon={AlertIcon} />
        </div>
        <div className={classes.current}>
          <ClientCard CardTitle="Current Client" BackgroundColor="#2196F3" SubtitleColor="rgba(255, 255, 255, 0.54)" TextColor="#FFFFFF" PatientName={patients[0]} PhoneNumber="(555)-555-5555" AppointmentStartTime="2:45 PM"/>
        </div>
        <ClientCard CardTitle="Upcoming" BackgroundColor="#FFFFFF" SubtitleColor="rgba(0, 0, 0, 0.54)" TextColor="rgba(0, 0, 0, 0.87)" PatientName={patients} PhoneNumber="(555)-555-5555" AppointmentStartTime="2:45 PM"/> 
      </div>
      <div className={classes.weeklyOverviewCard}>
        <WeeklyOverviewCard />
      </div>
      <div className={classes.todoCard}>
        <TodoCard />
      </div>
    </div>
  );
}


