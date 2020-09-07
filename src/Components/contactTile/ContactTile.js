import React from 'react'
import { Container, Typography} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: ({TextColor}) => ( {
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
      color: TextColor
    }),
    itemText: ({
        fontSize: '14px', 
        color: 'rgba(255, 255, 255, 0.54)'
    })
  });

export default function ContactTile({PatientName, PhoneNumber, AppointmentStartTime, TextColor})
{
    const classes = useStyles({TextColor});
    return (
    <Grid container spacing={2}>
        <Grid item>
            <Avatar alt={PatientName}>
                <AccountCircleIcon />
            </Avatar>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs container direction="row" spacing={2}>
                <Grid item xs>
                    <Typography variant="subtitle1" style={{marginLeft: '1em', fontSize: '14px', color: 'color: rgba(255, 255, 255, 0.87)', fontFamily: 'Roboto'}}>
                        {PatientName} 
                    </Typography>
                    
                    <Grid item xs container direction ="row">
                        <Typography variant="subtitle2" style={{marginLeft: '1em'}} className={classes.itemText}>
                            {PhoneNumber}
                        </Typography>
                        <Typography variant="subtitle2" style={{marginLeft: '23%'}} className={classes.itemText}>
                            {AppointmentStartTime}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <IconButton style={{marginLeft: '.05em', color: 'rgba(255, 255, 255, 0.54'}}><MoreVertIcon/></IconButton>
        
    </Grid>
    )
}
