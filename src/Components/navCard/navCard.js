import React from 'react'
import { Container, Typography, Box} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import ContactTile from '../contactTile/ContactTile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: ({BackgroundColor, TextColor}) => ( {
    width: '220px',
    textAlign: 'left',
    marginLeft: '14px',
    color: "black",
  }),
  names: {
    fontWeight: "bold"
  },
  pos: {
      marginTop: "7px"
  },
  text: {
    marginLeft: "10px"
  },
  button:{
    position: "absolute",
    right: "0px",
    width: "-500px"
  }
});


export default function NavCard({CardTitle, BackgroundColor, SubtitleColor, TextColor, PatientName, PhoneNumber, AppointmentStartTime})
{ 
  const classes = useStyles({BackgroundColor, TextColor});
  return (
    <Box display="flex" flexDirection="row" className={classes.root}>
        <Avatar alt={PatientName} className={classes.pos}>
            <AccountCircleIcon />
        </Avatar>
        <Box p={1} className={classes.text} >
            <Box className={classes.names}>
                {PatientName}
            </Box>
            <Box>
                {AppointmentStartTime}
            </Box>
        </Box>
    </Box>);
}
