import React from 'react'
import {Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles({
    root: {
        /* White / High Emphasis */
        background: "#FFFFFF",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
        borderRadius: "4px",
        width: '90%',
        height: '100%',
        textAlign: 'center',
        /* Gray / Divider */
        border: '1px solid #E5E5E5',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineheight: '30px',
        /* identical to box height, or 150% */
        letterSpacing: '0.15px'
    },
    title: {
        display: 'flex',
        alignItems: 'center'
    }
  });

export default function WeeklyOverviewCard()
{
    const classes = useStyles();
    return(
    <Card className={classes.root}>
        <CardContent>
            <div className={classes.title}>
            <KeyboardBackspaceIcon /><Typography variant="h5" component="h1">Weekly Overview</Typography>
            </div>
            
        </CardContent>
    </Card>
    );
}