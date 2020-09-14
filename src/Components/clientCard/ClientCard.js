import React from 'react'
import { Container, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import ContactTile from '../contactTile/ContactTile';

const useStyles = makeStyles({
  root: ({BackgroundColor, TextColor}) => ( {
    width: '400px',
    textAlign: 'left',
    /* White / High Emphasis */
    background: BackgroundColor,
    /* Gray / Divider */
    border: '1px solid #E5E5E5',
    marginLeft: '3%',
    marginTop: '3em',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineheight: '30px',
    /* identical to box height, or 150% */
    letterSpacing: '0.15px',
    color: TextColor
  })
});


export default function ClientCard({CardTitle, BackgroundColor, SubtitleColor, TextColor, PatientName, PhoneNumber, AppointmentStartTime})
{ 
  const classes = useStyles({BackgroundColor, TextColor});
  return (
  <Card className={classes.root}>
    <Typography variant="h5" style={{paddingTop: '30px', paddingLeft:'20px'}}>{CardTitle}</Typography>
    <CardContent>
        {
            Array.isArray(PatientName) ? PatientName.map(name => (
            <ContactTile  PatientName={name} PhoneNumber={PhoneNumber} AppointmentStartTime={AppointmentStartTime} SubtitleColor={SubtitleColor} TextColor={TextColor}/>
        )): <ContactTile  PatientName={PatientName} PhoneNumber={PhoneNumber} AppointmentStartTime={AppointmentStartTime} SubtitleColor={SubtitleColor} TextColor={TextColor}/>}
        
    </CardContent>
  </Card>);
}
