import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReactRoundedImage from "react-rounded-image";
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { useForm } from 'react-hook-form';
import FormData from 'form-data';
import axios from "axios";
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useAuth } from "../Context/AuthContext";

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
    marginLeft: "110px",
    color: "green"
  }
}));

export default function ProfilePage() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([{ id: 1, name: "Run" }]); // This is the new way of doing this.state with react hooks. it also users destructuring. We are using [] for the destrucure since useState returns something like 'stateVariable, stateUpdateFunction'. tasks contains the infromation, setTasks is a function that updates the tasks state.
  const { register, handleSubmit, errors } = useForm()
  const { currentUser } = useAuth();
  const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
  const [images, setImages] = useState();
  const el = useRef(); // accesing input element
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getData(){
      const res = await axios.get('http://localhost:5000/doctors/pic/'+currentUser.uid);
      const b64Data = btoa(
        new Uint8Array(res.data.data).reduce(
            (dataArray, byte) => {
                return dataArray + String.fromCharCode(byte);
            }, 
            ''
        )
      );
      const userAvatarData = {
        key: 'userAvatar',
        value: `data:image/png;base64,${b64Data}`
      };
      setImages(userAvatarData.value); // here we return the base64 image data to our component
      //setImages("data:image/png;base64," + res.data.data);
      console.log(res.data.data);
    }
    
    getData();
  }, [])
  
  const refreshPage = () => {
    window.location.reload();
  }

  const handleChange = (e) => {
    const file = e.target.files[0]; // accesing file
    //console.log(file);
    setFile(file); // storing file
  }

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    //console.log(formData.get('file'));
    const res = await axios.put('http://localhost:5000/doctors/upload/'+currentUser.uid, formData);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterottom>
        Update Profile Information
      </Typography>
      {console.log(currentUser.uid)}
      
      <br />
      <Card className={classes.profile}>
        <Typography className={classes.profTitle}>Change Profile Picture</Typography>
        <img src={images} className={classes.photo}/>
        <br />
        <Button
          variant="contained"
          component="label"
          className={classes.uploadButton}
        > Upload File
        <input ref={el} onChange={handleChange} type="file" hidden accept="image/*"></input>
        </Button>
        
        <br />
        <Button className={classes.submitButton} onClick={() => {uploadFile(); refreshPage(); }}>Submit</Button> 
      </Card>
      <Card style={{}} className={classes.text}>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="First Name" />
        <br />
        <TextField id="outlined-basic" label="Last Name" />
        <br />
        <TextField id="outlined-basic" label="Title" />
        <br />
        <TextField id="outlined-basic" label="Email" />
        <br />
        <TextField id="outlined-basic" label="Phone Number (Call)" />
        <br />
        <TextField id="outlined-basic" label="Phone Number (Text)" />
        <br />
        <TextField id="outlined-basic" label="Address Number" />
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
        />
        </form>
        <br />
        <Button onClick={() => {handleClickOpen();}} className={classes.saveButton} variant="contained" component="span" >
          Save
        </Button>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        >
          <DialogTitle >{"Profile information updated!"}</DialogTitle>
          <DialogContent>
            <CheckCircleIcon className={classes.check}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
      
    </div>
  );
}


