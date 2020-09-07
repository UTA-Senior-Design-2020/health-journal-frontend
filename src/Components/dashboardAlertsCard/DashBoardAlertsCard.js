import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        width: '10%',
        textAlign: 'center',
        /* White / High Emphasis */
        background: '#FFFFFF',
        /* Gray / Divider */
        border: '1px solid #E5E5E5',
        marginLeft: '3%'
    },
    icon: {
      height: 48,
      width: 77,
      paddingTop: 20
    },
  });


export default function DashBoardAlertsCard({cardName, amount, icon })
{
  const classes = useStyles();
  const TheIcon = icon;
  return (
  <Card className={classes.root}>
    <CardActionArea>
      <TheIcon className={classes.icon}/>
      <CardContent>
        <Typography variant="h5">{amount}</Typography>
        <Typography color="textSecondary" gutterBottom>
          {cardName}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>);
}
