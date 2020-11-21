import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { useForm } from 'react-hook-form';
import FormData from 'form-data';
import axios from "axios";

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
    marginTop:"3px",
    background: "#2196F3",
    color: "white"
  },
  saveButton: {
    marginTop:"8px",
    background: "#2196F3",
    color: "white"
  }
}));

export default function ProfilePage() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([{ id: 1, name: "Run" }]); // This is the new way of doing this.state with react hooks. it also users destructuring. We are using [] for the destrucure since useState returns something like 'stateVariable, stateUpdateFunction'. tasks contains the infromation, setTasks is a function that updates the tasks state.
  const { register, handleSubmit, errors } = useForm()
  const id = 'WATeb5ivETTZy3zfo1klqmyMiWR2'

  const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });    
  const [progress, setProgress] = useState(0); // progess bar
  const el = useRef(); // accesing input element

  const handleChange = (e) => {
    setProgress(0)
    const file = e.target.files[0]; // accesing file
    //console.log(file);
    setFile(file); // storing file
  }

  const uploadFile = () => {
    const formData = new FormData();
    //console.log(file);
    formData.append('file', file); // appending file
    console.log(formData.get('file'));
    axios.put('http://localhost:5000/doctors/'+id, formData);
  }
  
  /*const onSubmit = (data) => {
    //console.log(data);
    const fd = new FormData();
    fd.append('name', )
    console.log(data['picture'][0]);
    axios.put('http://localhost:5000/doctors/'+id, data['picture'][0], {
      headers: {
        'Content-Type': data['picture'][0].type
      }
    })
  };


  /*
  useEffect(() => {
    fetchTasks();
  }, []); // the second paramter of [] will cause this useEffect function to only run once the page has loaded. It will not run after that.

  async function fetchTasks(patientId) {
    try {
      let apiResponse = await axios.get("/api/tasks"); // axios.get is an async function, therefore we need to call it with await. AND because of that, we have to make this function 'fetchTasks' an async function.
      console.log("tasks > api/tasks GET:", apiResponse);

      let { data, status } = apiResponse; // apiResponse is a json object that contains many keys. What we are doing here is destructuring and getting only the keys and the value of 'data' and 'status'
      console.log("tasks > apiResposne", apiResponse);
      console.log("tasks > data:", data);
      console.log("tasks > status:", status);
      if (status === 200) {
        setTasks(data); // save the data from our api to the state variable 'tasks'
      }
    } catch (error) {
      console.log("tasks > error:", error);
      setTasks([]); // Api returned a status code other than 200 OK. Set tasks to nothing.
    }
  }
  var fileUploadHandler = () => {
      const fd = new FormData();
      //axios.post('http://ec2co-ecsel-w7q6c99ot638-2098345273.us-east-1.elb.amazonaws.com:5000/')
  }
  */

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Update Profile Information
      </Typography>
      <br />
      <Card className={classes.profile}>
        <Avatar alt="Dr. Young" className={classes.large}>
        </Avatar>
        <br />
        <input ref={el} onChange={handleChange} type="file"></input>
        <br />
        <button onClick={uploadFile}>Submit</button> 
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
        <Button className={classes.saveButton} variant="contained" component="span" >
          Save
        </Button>
      </Card>
      
    </div>
  );
}
