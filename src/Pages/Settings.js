import React, {useState} from 'react'
import { Card, Button, Alert} from "react-bootstrap"
import { useAuth } from "../Context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: "20px",
    display: "flex"
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30)
  },
  left: {
    float: "left"

  },
  profTitle: {
    fontSize: 26
  },
  profile: {
    position: "absolute",
    float: "left",
    padding: "100px 20px 20px 20px",
    height: "573px"
  },
  text: {
    position: "absolute",
    float: "left",
    padding: "20px",
    marginLeft:"350px", 
    width:"280px", 
    paddingBottom:"20px"
  },
  uploadButton: {
    marginTop:"10px",
    background: "#2196F3",
    color: "white"
  },
  submitButton: {
    marginTop:"10px",
    background: "#2196F3",
    color: "white"
  },
  saveButton: {
    marginTop:"8px",
    background: "#2196F3",
    color: "white"
  },
  photo: {
    height: "200px",
    width: "280px",
    backgroundSize: "contain"
  },
  check: {
    marginLeft: "75px",
    color: "green"
  }
}));

export default function Settings() {
    const classes = useStyles();
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br/>
          <strong>Care Team Name:</strong> {"Team 1"}
          <br/>
          <br/>
          <strong>
            Change Password:
            <br/>
            <TextField type="password" label="Password" ></TextField>
            <br/>
            <TextField type="password" label="Confirm Password" ></TextField>
            <br/>
            <Button onClick={() => {handleClickOpen();}} className={classes.saveButton} variant="contained" component="span" >
              Save
            </Button>
            <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            >
              <DialogTitle >{"Password updated!"}</DialogTitle>
              <DialogContent>
                <CheckCircleIcon className={classes.check}/>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </strong> 
          
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
    )
}
