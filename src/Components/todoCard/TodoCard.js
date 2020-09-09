import React from 'react'
import {Typography, CardHeader} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

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

export default function TodoCard()
{
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
    return(
    <Card className={classes.root}>
        <CardContent>
            <Typography variant="h5" component="h1">To do</Typography>
            <List>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                    <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                        <CommentIcon />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                    );
                })}
            </List>
        </CardContent>
    </Card>
    );
}