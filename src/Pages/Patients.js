import React, { useEffect, useState, useRef } from "react";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import AppBar from '@material-ui/core/AppBar';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import { forwardRef } from 'react';
import { Container, Typography, Button, TextField, InputBase} from "@material-ui/core";
import { fade, makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import StarsIcon from '@material-ui/icons/Stars';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import axios from "axios";
import ReactDOM from "react-dom";

// following imports are for Material-Table
import AddBox from '@material-ui/icons/AddBox';  
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useAuth } from '../Context/AuthContext'

const theme = createMuiTheme();

// CSS Should be done this way
const useStyles = makeStyles({
  root: {
    background: "#FBFCFD",
  },
  blueBox: { // Nicci Triani
      position: "absolute",
      //left: "21.88%",
      marginLeft: "0.75%",
      //right: "25.41%",
      top: "11.11%",
      bottom: "66.94%",
      background: "#2196F3",
      /* Gray / Divider */
      border: '1px solid #E5E5E5',
      /* Nicci Triani */

      width: "61%",
      height: "25%",

      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "20px",

/* identical to box height, or 136% */
      letterSpacing: "0.15px",
      
      color: "#FFFFFF",
  },
  patientPic: {
      position: "absolute",
      marginLeft: "-1%",
      marginTop: "-1%",
      height: "105%",
      width: "auto",  // not sure if this does anything, but will leave in for now
      borderRadius: "2px 0px 0px 2px", 
      boxShadow: "5px 0px 4px rgba(0,0,0,2)",
  },
  timeIcon: {
      position: "absolute",
      marginLeft: "80.8%",
      marginTop: "2.61%",
      color: "rgba(255, 255, 255, 0.76)",
      fontSize: "150%"
  },
  topBar: { // Add New Patient
      position: "absolute",
      marginLeft: "-1.4%",
      top: "0%",
      width: "87.1%", 
      //width: "undefined",
      height: "8.75%",

  },
  searchBox: { // Search 
      position: "absolute",
      left: "77.19%",
      top: "1.5%",
      width: "12%",
      height: "5.56%",
      /* Background / Dark */
      background: "#E8E8E8",
      opacity: "0.5",
      border: "2px",
  },
  patientsList: { // Patients
      position: "absolute",
      left: "1.55%",
      top: "16.39%",
      width: "82.25%",
      height: "30.28%",
  },
  buttonWhiteFont: {
      /* Button */
      position: "absolute",
      textAlign: "center",
      marginLeft: "43.23%",
      top: "30.6%",
      
      height:"5%",
      width: "6%",
      
      /* Button / Roboto Medium */
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "16px",
      
      /* identical to box height, or 114% */
      letterSpacing: "0.75px",

      background: "#2196F3",
      color: "#FFFFFF",
  },
  search: {
      position: 'relative',
      marginTop: "1%",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade("rgba(200, 200, 200, 0.76)", 0.15),
      '&:hover': {
        backgroundColor: fade("rgba(200, 200, 200, 0.76)", 0.25),
      },
      marginLeft: "120px",
      //paddingLeft: "10%",
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        width: 'auto',
      },
      marginRight: theme.spacing(2)
  },
  searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  inputRoot: {
      color: 'inherit',
  },
  inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
        '&:focus': {
          width: '24ch', // when this is > 16 for transition effect, formatting of App Bar gets messed up.
        },
      },
  },
});

export default function Patients() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  return (
    <React.Fragment>
    <PatientBox />
    <TopAppBar />
    <PatientsList />
    <ButtonMessage />
    <ButtonCall />
    <ButtonView />
    <ButtonCall />
    </React.Fragment>

  );
}

var patientList = [];

export function getPatientList() {
  return patientList;
}

export function setPatientList(tempPatientList) {
  patientList = tempPatientList;
  ///console.log(patientList)
}

export function TopAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.topBar}>
          <AppBar position="static" color="inherit" style={{height: "98%"}}>
            <Toolbar>
              <Button style={{marginTop: ".9%", marginLeft: "1%", display: "block",}} // button currently nonfunctional
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<StarsIcon />}
                >
                Add New Patient 
              </Button>
              
              <div className={classes.search} >
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase id="search"
                  placeholder="Search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{'aria-label': 'search'}}
                />
              </div> 
            </Toolbar>
          </AppBar>
        </div>
    )
}

export function PatientBox() {
    const classes = useStyles();
    return ( 
      <Card className={classes.blueBox}>
        <CardContent>
          <Grid container spacing={3}>
            <div>
            <img src={require('./patient_pic.png')} 
            style={{
              position: "absolute",
              marginLeft: "-1%",
              marginTop: "-1%",
              height: "106%",
              //width: "auto",  // not sure if this does anything, but will leave in for now
              borderRadius: "2px 0px 0px 2px", 
              boxShadow: "5px 0px 4px rgba(0,0,0,2)",
              }}/>
            </div>
            <div style={{marginLeft: "39.96%"}}>
              <Typography variant="h4" style={{position: "relative", paddingTop: "", fontWeight:"bold", fontSize: "250%",}}>
                  Nicci Triani
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "3%"}}>
                  <strong>Date of Birth:</strong> 11/02/2020
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%"}}>
                  <strong>Address:</strong> 42 Wallaby Way, Sydney, TX 76013
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%"}}>
                  <strong>Primary Care Physician:</strong> Dr. Long 
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%", fontSize:"70%", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.76)"}}>
                  NicciTriani@gmail.com
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%", fontSize:"70%", color: "rgba(255, 255, 255, 0.76)"}}>
                  (555) 555-5555
              </Typography>
              <Typography variant="h6" style={{position: "absolute", marginLeft:"44%", marginTop: "-18%", fontSize:"72%", color: "rgba(255, 255, 255, 0.76)"}}>
                  Currently Patient
              </Typography>
              <Typography variant="h6" style={{position: "absolute", marginLeft:"44%", marginTop: "-16%", fontSize:"72%", color: "rgba(255, 255, 255, 0.76)"}}>
                  HH:MM DD/MM/YY
              </Typography>    
            </div>
            <AccessTimeIcon className={classes.timeIcon}/>
          </Grid>
        </CardContent>
      </Card>
    );
}

export function ButtonMessage() {
    const classes = useStyles();

    const [Patients, setPatients] = useState([]);
    useEffect(() => {
        async function getData(){
          try{
          let {data} = await axios.get("http://localhost:5000/patients/");
          setPatients(data);     
          //console.log(data);
        }
        catch(err)
        {
          //console.err(err);
        }
      }
        getData();
      }, []) 
    useEffect(() => { 
    });  
    
    return (
    <Button className={classes.buttonWhiteFont} onClick={() => { 
      alert('Call this number: \n'+Patients[0].CallPhone) }}>
        <Typography component={"span"} variant="h6" style={{border: "none", fontWeight: "bold"}}>
            Message
        </Typography>

    </Button>
        );
}

export function ButtonCall() {
    const classes = useStyles();
    return (
    <Button className={classes.buttonWhiteFont} style={{marginLeft: "49.5%"}}>
        <Typography component={"span"} variant="h6" style={{border: "none", fontWeight: "bold"}}>
            Call
        </Typography>
    </Button>
        );
}

export function ButtonView() {
    const classes = useStyles();
    return (
    <Button className={classes.buttonWhiteFont} style={{marginLeft: "55%"}}>
        <Typography component={"span"} variant="h6" style={{border: "none", fontWeight: "bold"}}>
            View
        </Typography>
    </Button>
        );
}
// saving for now. might need for other place implementation?
export function SearchBox() {
    const classes = useStyles();
    return (
      <div className={classes.searchBox}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="search-input" label="Search" />
          </Grid>
        </Grid>
      </div>
        );
}

// for MaterialTable
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Container>
            <Box>
              {children}
            </Box>
            </Container>
          )}
        </div>
      );
}

// for MaterialTable
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

// for MaterialTable
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function loadData(Patients,Appointments,AppointmentsLast) {
  let dict = [{ name:"", activity:"", appointment_last:"", appointment_next:"", patient_id:"", patient_dues:"", AddressId:"", CallPhone:"", TextPhone:"",Email:"", }];
  console.log(Patients)
  var arrayOfPatients = [];
  var appointments = loadAppointments(Appointments)
  var appointmentLast = loadAppointmentLast(AppointmentsLast)
  //console.log(appointments)
  
    for(const Patient in Patients)
    {
      dict.name = Patients[Patient].GivenName+ ' ' +Patients[Patient].FamilyName
      dict.activity = ""

      
      dict.appointment_last = appointments[Patients[Patient.Date]]
      //dict.appointment_last = appointmentLast[Patients[Patient.PatientId]]


      dict.appointment_next = ""
      dict.patient_id = Patients[Patient].PatientId
      dict.patient_dues = ""
      dict.AddressId = Patients[Patient].AddressId
      dict.CallPhone = Patients[Patient].CallPhone
      dict.TextPhone = Patients[Patient].TextPhone
      dict.Email = Patients[Patient].Email
      arrayOfPatients.push(dict)
      dict = [{}];
    }
    return arrayOfPatients
}

function loadAppointments(Appointments) {
  let dict = [{ AppointmentID:"", PatientID:"", DoctorID:"", Date:"", StartTime:"", EndTime:"", Status: ""}];
  var arrayOfAppointments = [];
  for(const Appointment in Appointments)
  {
    dict.AppointmentID = Appointments[Appointment].AppointmentId
    dict.PatientID = Appointments[Appointment].PatientId
    dict.DoctorID = Appointments[Appointment].DoctorId
    dict.Date = Appointments[Appointment].Date
    dict.StartTime = Appointments[Appointment].StartTime
    dict.EndTime = Appointments[Appointment].EndTime
    dict.Status = Appointments[Appointment].Status
    arrayOfAppointments.push(dict)
    dict = [{}];
  }
  return arrayOfAppointments
}

function loadAppointmentLast(appointmentsLast) {
  let dict = [{ AppointmentLast: ""}];
  var arrayOfAppointmentLast = [];
  for(const appLast in appointmentsLast)
  {
    dict.AppointmentLast = appointmentsLast[appLast].AppointmentLast
    arrayOfAppointmentLast.push(dict)
    dict = [{}];
  }
  return arrayOfAppointmentLast

}

var realActivePatient = [];

export function PatientsList() {
    const classes = useStyles();

    const {currentUser} = useAuth();
    const [Patients, setPatients] = useState([]);
    const [Appointments, setAppointments] = useState([]);
    const [AppointmentsLast, setAppointmentsLast] = useState([]);
    const [activePatient, setActivePatient] = useState([]);
    //var activePatient = []

    useEffect(() => {
      async function getData(){
        try{
        let {data} = await axios.get("http://localhost:5000/patients/");
        setPatients(data);     

        var data2 = await axios.get("http://localhost:5000/appointments/"+currentUser.uid); 
        setAppointments(data2.data);

        //needs to make call for every patientID in database
        var data3 = await axios.get("http://localhost:5000/appointments/"+Patients.PatientId+"/appointmentLast"); // needs to use patientID instead 
        setAppointmentsLast(data3.data);

        //console.log(data);
        //console.log(data2.data);
        //console.log(data3.data);
      }
      catch(err)
      {
        //console.err(err);
      }
    }
      getData();
    }, []) 
  useEffect(() => { 
  });  
  
    const tableIcons = { // should prob put the next 16 lines in a js object or something
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
    const [value, setValue] = React.useState(0);

    function toggle(id) {
      console.log(id);
    }

    const selectedRow = React.useRef([]);
    const updateTimer = React.useRef(null);
    
    return ( 
        <div>        
        <Card className={classes.blueBox}>
        <CardContent>
          <Grid container spacing={3}>
            <div>
            <img src={require('./patient_pic.png')} 
            style={{
              position: "absolute",
              marginLeft: "-1%",
              marginTop: "-1%",
              height: "106%",
              //width: "auto",  // not sure if this does anything, but will leave in for now
              borderRadius: "2px 0px 0px 2px", 
              boxShadow: "5px 0px 4px rgba(0,0,0,2)",
              }}/>
            </div>
            <div style={{marginLeft: "39.96%"}}>
              <Typography variant="h4" style={{position: "relative", paddingTop: "", fontWeight:"bold", fontSize: "250%",}}>
                  { 
                  activePatient.length ? activePatient[0].name : ""
                  }
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "3%"}}>
                  {
                    activePatient.length ? "Date of Birth: " : ""
                  }
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%"}}>
                  {
                    activePatient.length ? "Address ID: "+activePatient[0].AddressId : ""
                  }
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%"}}>
                  {
                    activePatient.length ? "Primary Care Physician: " : "" //need to add primary care physician field to patients?
                  } 
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%", fontSize:"70%", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.76)"}}>
                  {
                    activePatient.length ? activePatient[0].Email : ""
                  }
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%", fontSize:"70%", color: "rgba(255, 255, 255, 0.76)"}}>
                  {
                    activePatient.length ? "Call: "+activePatient[0].CallPhone : ""
                  }
              </Typography>
              <Typography variant="h6" style={{position: "relative", paddingTop: "%", fontSize:"70%", color: "rgba(255, 255, 255, 0.76)"}}>
                  {
                    activePatient.length ? "Text: "+activePatient[0].TextPhone : ""
                  }
              </Typography>
              <Typography variant="h6" style={{position: "absolute", marginLeft:"44%", marginTop: "-18%", fontSize:"72%", color: "rgba(255, 255, 255, 0.76)"}}>
                  Currently Patient
              </Typography>
              <Typography variant="h6" style={{position: "absolute", marginLeft:"44%", marginTop: "-16%", fontSize:"72%", color: "rgba(255, 255, 255, 0.76)"}}>
                  HH:MM DD/MM/YY
              </Typography>    
            </div>
            <AccessTimeIcon className={classes.timeIcon}/>
          </Grid>
        </CardContent>
      </Card>
        {setPatientList(Patients)}  
        <AppBar position="static" // can AppBar height dynamically react to MaterialTable height?
        style={{
          position: "absolute",
          marginLeft: "0.75%",
          marginTop: "21%",
          width: "0%", // change this to 83% to reveal 'All', 'Seen' and 'Upcoming' tabs
          height: "50%",
          background: "#FFFFFF",
          color: "black",
        }} >
        </AppBar>
        <TabPanel value={value} index={0}>  {/* ALL */}
          <MaterialTable onSearchChange={() => {
        //setActivePatient(tableRef.current.state.data);
      }} id='table'
          style={{
            position: "absolute",
            marginTop: "24.8%",
            marginLeft: "-8.3%",
            zIndex: "9999", // without this, items end up behind the Tabs
            border: "none",
            boxShadow: "none",
            width: "82.3%",
          }}
            title="Patients"
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Last Appointment', field: 'appointment_last', type: 'date'},
                { title: 'Next Appointment', field: 'appointment_next', type: 'date'},
                { title: 'PatientID', field: 'patient_id', type: 'numeric' },
              ]}
            data={ // loadData() induces a warning, but this function call is necessary.
              (loadData(Patients,Appointments,AppointmentsLast))
            }
            options={{
                selection: true,
                //rowStyle: rowData => ({ backgroundColor: rowData.tableData.checked ? '#37b15933' : '' }),
                paging: false,
                search: true,
            }}
            
            onSelectionChange={(data) => {
            if (data.length) {
              //activePatient = data
              setActivePatient(data)
              console.log(activePatient)
            }
          }}
            icons={tableIcons}
          />
          </TabPanel>
        <TabPanel value={value} index={1}>  {/* SEEN */}
        </TabPanel>
        <TabPanel value={value} index={2}> {/* UPCOMING */}
        {/* if(appointment_next within next 24 hours): include patient info in table */}
        </TabPanel>
        </div>
        );
}
