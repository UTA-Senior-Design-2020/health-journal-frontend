import React from 'react'
import { Container, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import ContactTile from '../contactTile/ContactTile';
// CSS Should be done this way
const useStyles = makeStyles({
  root: ({BackgroundColor, TextColor}) => ( {
    display: 'flex',
    flexDirection: 'column',
    width: '23.12%',
    textAlign: 'left',
    /* White / High Emphasis */
    background: BackgroundColor,
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
    color: TextColor
  }),
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
});


export default function ClientCard({CardTitle, BackgroundColor, SubtitleColor, TextColor, PatientName, PhoneNumber, AppointmentStartTime})
{ 
  const classes = useStyles({BackgroundColor, TextColor});
  return (
  <Card className={classes.root}>
    <Typography variant="h5" style={{paddingTop: '30px', paddingLeft:'20px'}}>{CardTitle}</Typography>
    <CardContent>
        <ContactTile  PatientName={PatientName} PhoneNumber={PhoneNumber} AppointmentStartTime={AppointmentStartTime} SubtitleColor={SubtitleColor} TextColor={TextColor}/>
    </CardContent>
  </Card>);
}
