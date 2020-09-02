import React from 'react'
import { Container, Typography} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import PeopleIcon from '@material-ui/icons/People';
import AlertIcon from '@material-ui/icons/Report';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

// Test
// CSS Should be done this way
const useStyles = makeStyles({
  root: {
    background: "#FBFCFD",
  },
  patients: {
    width: '10%',
    textAlign: 'center',
    /* White / High Emphasis */
    background: '#FFFFFF',
    /* Gray / Divider */
    border: '1px solid #E5E5E5',
    marginLeft: '3%'
  },
  reports: {
    width: '10%',
    textAlign: 'center',
    /* White / High Emphasis */
    background: '#FFFFFF',
    /* Gray / Divider */
    border: '1px solid #E5E5E5',
    marginLeft: '3%'
  },
  currentClientCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '23.12%',
    textAlign: 'left',
    /* White / High Emphasis */
    background: '#2196F3',
    /* Gray / Divider */
    border: '1px solid #E5E5E5',
    marginLeft: '3%',
    marginTop: '8em',
    paddingBottom: '2%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineheight: '30px',
    /* identical to box height, or 150% */
    letterSpacing: '0.15px',
    color: '#FFFFFF'
  },
  upcomingClientsCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '23.12%',
    textAlign: 'left',
    /* White / High Emphasis */
    background: '#FFFFFF',
    /* Gray / Divider */
    border: '1px solid #E5E5E5',
    marginLeft: '3%',
    marginTop: '2em',
    paddingBottom: '2%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineheight: '30px',
    /* identical to box height, or 150% */
    letterSpacing: '0.15px',
    color: 'rgba(0, 0, 0, 0.87)'
  },
  patientsicon: {
    height: 48,
    width: 77,
    paddingTop: 20
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Typography variant="h2">Dashboard</Typography>
      </Container>
      <div className={classes.row}>
        <PatientsCard />
        <ReportsCard />
      </div>
      <CurrentClientCard />
      <UpcomingClientsCard />
    </React.Fragment>


  );
}

export function PatientsCard()
{
  const classes = useStyles();
  return (
  <Card className={classes.patients}>
    <CardActionArea>
      <PeopleIcon className={classes.patientsicon}/>
      <CardContent>
        <Typography variant="h5">8</Typography>
        <Typography color="textSecondary" gutterBottom>
          Patients
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>);
}

export function ReportsCard()
{
  const classes = useStyles();
  return (
  <Card className={classes.reports}>
    <CardActionArea>
      <AlertIcon className={classes.patientsicon}/>
      <CardContent>
        <Typography variant="h5">4</Typography>
        <Typography color="textSecondary" gutterBottom>
          Reports
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>);
}

export function CurrentClientCard()
{
  const classes = useStyles();
  return (
  <Card className={classes.currentClientCard}>
    <Typography variant="h5" style={{paddingTop: '30px', paddingLeft:'20px'}}>Current Client</Typography>
    <CardContent>
      <ContactCard />
    </CardContent>
  </Card>);
}

export function UpcomingClientsCard()
{
  const classes = useStyles();
  return (
  <Card className={classes.upcomingClientsCard}>
      <Typography variant="h5" style={{paddingTop: '30px', paddingLeft:'20px'}}>Upcoming</Typography>
      <CardContent>
        <ContactCard style={{paddingBottom: '15px'}}/>
        <ContactCard />
      </CardContent>
  </Card>);
}

export function ContactCard()
{
  const classes = useStyles();
  return (

  <Grid container direction="row" alignItems="center">
    <Avatar alt="Nicci Troiani">
      <AccountCircleIcon />
    </Avatar>
    <Typography variant="subtitle1" style={{marginLeft: '1em', fontSize: '14px', color: 'color: rgba(255, 255, 255, 0.87)', fontFamily: 'Roboto'}}>
      Nicci Troiani
      <br />
      <Grid container direction="row" alignItems="center">
        <Typography variant="subtitle2" style={{fontSize: '14px', color: 'rgba(255, 255, 255, 0.54'}}>
          (555)-555-5555
        </Typography>
        <Typography variant="subtitle2" style={{marginLeft: '9em', fontSize: '14px', color: 'rgba(255, 255, 255, 0.54'}}>
          2:45 PM
        </Typography>
      </Grid>
    </Typography>
    <IconButton style={{marginLeft: '1.01em', color: 'rgba(255, 255, 255, 0.54'}}><MoreVertIcon/></IconButton>
  </Grid>

  );
}
