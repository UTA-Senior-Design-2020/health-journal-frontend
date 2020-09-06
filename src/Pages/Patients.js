<<<<<<< HEAD
import React from 'react'
import MaterialTable from 'material-table';
import { Container, Typography, Button, TextField} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import StarsIcon from '@material-ui/icons/Stars';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import { forwardRef } from 'react';

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

// CSS Should be done this way
const useStyles = makeStyles({
  root: {
    background: "#FBFCFD",
  },
  blueBox: { // Nicci Triani
      position: "absolute",
      left: "21.88%",
      //right: "25.41%",
      top: "11.11%",
      bottom: "66.94%",
      background: "#2196F3",
      /* Gray / Divider */
      border: '1px solid #E5E5E5',
      /* Nicci Triani */

      width: "53.83%",

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
      //border: "1px solid #E5E5E5",
      position: "absolute",
      left: "22%",
      top: "11.25%",
      z_index: "1",
  },
  sideBox: { // Add stuff here for idk what.
      position: "absolute",
      left: "77.19%",
      //right: "2.19%",
      top: "11.11%",
      bottom: "66.94%",
      
      background: "#FAFAFA",
      width: "20.63%",
      height: "21.94%",
  },
  picturePlace: {
      position: "absolute",
      left: "0%",
      right: "78.79%",
      top: "0.63%",
      bottom: "0.63%",
      //background: "photo-1544817747-b11e3e3b6ac2.jpg"
  },
  topBar: { // Add New Patient
      position: "absolute",
      left: "20%",
      right: "0%",
      top: "0%",
      bottom: "0%",
      width: "88%",
      height: "8.89%",
  },
  searchBox: { // Search
    position: "absolute",
      left: "77.19%",
      top: "1.5%",
      //width: "18.13%",
      width: "225px",
      height: "5.56%",
      /* Background / Dark */
      background: "#E8E8E8",
      opacity: "0.5",
      border: "2px",
      /*position: "absolute",
  
      right: "16.67%",
      top: "3%",
      bottom: "0%",

      */
  },
  patientsList: { // Patients
      position: "absolute",
      /*
      left: "13.55%",
      right: "3.03%",
      top: "66.39%",
      bottom: "3.33%",
      */
      marginLeft: "13.55%",
      marginTop: "16.39%",
      width: "82.25%",
      height: "30.28%",
  },
  buttonWhiteFont: {
      /* Button */
      position: "absolute",
      textAlign: "center",
      left: "55.23%",
      top: "26.5%",
      //bottom: "10.76%",
      //marginLeft: "51%",
      //marginTop: "-12%",
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
//blue buttons
  buttonBlueFont: {
      position: "absolute",
      height: "16px",
      top: "26.5%",
      left: "78.75%",
      height: "5%",
      
      /* BUTTON - med 14 (16px, 1.25px) */
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontHeight: "500",
      fontSize: "14px",
      lineHeight: "16px",
      
      /* identical to box height, or 114% */
      textAlign: "center",
      letterSpacing: "1.25px",
      textTransform: "uppercase",

      /* Primary / 500 - Accent */
      color: "#2196F3",
  },
  iconsize: {
      position: "absolute",
      left: "8.33",
      right: "8.33%",
      top: "8.33%",
      bottom: "8.33%",
  
  }

=======
import React from "react";
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
>>>>>>> dev-update
});

export default function Patients() {
  const classes = useStyles();
  return (
<<<<<<< HEAD
    <React.Fragment>
    <div>
    <Container className={classes.picturePlace}>
      <Typography></Typography>
    </Container>
    </div>
    <SideBox />
    <PatientBox />
    <TopBar />
    <SearchBox />
    <PatientsList />
    <PatientPic />
    <ButtonMessage />
    <ButtonBroadcast />
    <ButtonView />
    <ButtonCall />
    <ButtonSkype />
    </React.Fragment>
  );
}

export function PatientPic() {
    const classes = useStyles();
    return (
        <div className={classes.patientPic}>
            <img src={require('./patient_pic.png')} 
            style={{
                width:"22.17%", borderRadius: "2px 0px 0px 2px", boxShadow: "5px 0px 4px rgba(0,0,0,2)",
                }}/>
        </div>
    )
}

export function PatientBox() { // fix formatting for HH:MM & DD/MM/YY
    const classes = useStyles();
    return (
    <Card className={classes.blueBox}>
        <CardContent>
          <Typography variant="h4" style={{paddingLeft:"33.96%",fontWeight:"bold"}}>
              Nicci Triani
          <br /> <br />
          </Typography>
          <Typography variant="h6" style={{paddingLeft:"33.96%",}}>
              Last Seen: 1/2/20 <br />Next Appointment: 8/8/20
          </Typography>
          <br />
          <Typography variant="h6" style={{paddingLeft:"33.96%",fontSize:"15px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.76)"}}>
            NicciTriani@gmail.com <br />(555) 555-5555
          </Typography>
          <Typography variant="h6" style={{paddingLeft:"83%", paddingBottom: "-25%", fontSize:"15px", color: "rgba(255, 255, 255, 0.76)"}}>
              HH:MM DD/MM/YY
          </Typography>
        </CardContent>
    </Card>);
}

export function SideBox() {
    const classes = useStyles();
    return (
    <Card className={classes.sideBox}>
        <CardActionArea>
            <CardContent>
              <Typography variant="h6" 
              style={{fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              /* or 133% */
              letterSpacing: "0.4px",
              
              color: "#000000",
              paddingLeft:"15px",
              //mix-blend-mode: normal;
              opacity: "0.6",}}>
                  Something
              </Typography>
              <Typography variant="h5" style={{paddingLeft:"15px"}}>
                  Add stuff here for idk what
              </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}

export function ButtonCall() { // needs icon
    const classes = useStyles();
    return (
    <Button className={classes.buttonBlueFont}>
        <Typography variant="h5" >
             Call
         </Typography>
    </Button>
        );
}

export function ButtonSkype() {
    const classes = useStyles();
    return (
    <Button className={classes.buttonBlueFont} style={{marginLeft: "100px"}}>
        <Typography variant="h5" >
             Skype
         </Typography>
    </Button>
        );
}

export function TopBar() { 
    const classes = useStyles();
    return (
    <Card className={classes.topBar}>
        <Button style={{marginTop: "1.75%", marginLeft: "1.75%"}}
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<StarsIcon />}
        >
            Add New Patient
        </Button>
        <Button style={{marginLeft:"73%", marginTop: "2%"}}
        color="default"
        startIcon={<ExitToAppIcon />}
        size="large"
        >
        </Button>
    </Card>
        );
}

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

export function PatientsList() { // expecting icons for search and clear
    const classes = useStyles();
    const tableIcons = {
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
    return (
      <MaterialTable
      style={{
        position: "absolute",
        left: "21.88%",
        right: "2.03%",
        top: "66.39%",
        bottom: "3.33%",
      }}
        title="Patients"
        columns={[
            { title: 'Name', field: 'name' },
            { title: 'Last Login', field: 'activity' },
            { title: 'PatientID', field: 'patient_id', type: 'numeric' },
            { title: 'Dues', field: 'patient_dues', type: 'numeric' },
          ]}
        data={[
            { name: 'yeah boy', activity: '14/04/20', patient_id: '0001', patient_dues: '$200'},
            { name: 'Erin Levin', activity: '17/04/20', patient_id: '0002', patient_dues: '$300'}
        ]}
        options={{
            selection: true,
            rowStyle: rowData => ({ backgroundColor: rowData.tableData.checked ? '#37b15933' : '' }),
            paging: false,
        }}
        icons={tableIcons}
        
        actions={[
            {

            }
        ]}
      />
        );
}

export function ButtonMessage() {
    const classes = useStyles();
    return (
    <Button className={classes.buttonWhiteFont}>
            <Typography variant="h6" style={{textTransform: "uppercase", border: "none", fontWeight: "bold"}}>
            Message
            </Typography>
    </Button>
        );
}

export function ButtonBroadcast() {
    const classes = useStyles();
    return (
    <Button className={classes.buttonWhiteFont} style={{marginLeft: "7.3%", paddingRight:"0%"}}>
            <Typography variant="h6" style={{border: "none", fontWeight: "bold"}}>
            Broadcast
            </Typography>
    </Button>
        );
}

export function ButtonView() {
    const classes = useStyles();
    return (
    <Button className={classes.buttonWhiteFont} style={{marginLeft: "14%", paddingRight:"0%"}}>
            <Typography variant="h6" style={{textTransform: "uppercase", border: "none", fontWeight: "bold"}}>
            View
            </Typography>
    </Button>
        );
}

=======
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Patients
      </Typography>
      <Typography variant="h6">Content</Typography>
    </div>
  );
}
>>>>>>> dev-update
