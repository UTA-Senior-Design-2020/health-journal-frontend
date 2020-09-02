import React from 'react'
import { Container, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import patient_pic from "./patient_pic.png"
import ExampleComponent from "react-rounded-image";
import StarsIcon from '@material-ui/icons/Stars';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// CSS Should be done this way
const useStyles = makeStyles({
  root: {
    background: "#FBFCFD",
  },
  blueBox: { // Nicci Triani
      position: "absolute",
      left: "13.55%",
      right: "25.41%",
      top: "11.11%",
      bottom: "66.94%",
      background: "#2196F3",
      /* Gray / Divider */
      border: '1px solid #E5E5E5',
      /* Nicci Triani */

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
      marginLeft: "13.55%",
      marginTop: "-11.11%",
      z_index: "1",
  },
  sideBox: { // Add stuff here for idk what.
      position: "absolute",
      left: "75.5%",
      right: "2.19%",
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
      left: "12.55%",
      right: "0%",
      top: "0%",
      bottom: "0%",
      width: "88%",
      height: "8.89%",
  },
  searchBox: { // Search
    position: "absolute",
      left: "74.38%",
      top: "1.5%",
      width: "18.13%",
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
  buttonMessage: {
      /* Button */
      position: "absolute",
      textAlign: "center",
      /*left: "43.75%",
      right: "48.98%",
      top: "79.11%",
      bottom: "10.76%",*/
      marginLeft: "51%",
      marginTop: "-12%",
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
  buttonBroadcast: {
    /* Button */
    position: "absolute",
    textAlign: "center",

    marginLeft: "58%",
    marginTop: "-12%",
    height:"5%",
    width: "7%",
    
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
  buttonView: {
    /* Button */
    position: "absolute",
    textAlign: "center",

    marginLeft: "66%",
    marginTop: "-12%",
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
  patientsListLine1: { // styling // start here
      position: "absolute",  
      left: "21.82%",
      right: "29.41%",
      top: "71.67%",
      bottom: "28.19%",
      height: "1px",
      width: "76.25%",
      background: "#D9D5EC",
  },
  patientsListLine2: { // styling
    position: "absolute",  
    left: "21.82%",
    right: "29.41%",
    top: "80.14%",
    bottom: "19.72%",
    height: "1px",
    width: "76.25%",
    background: "#D9D5EC",
  },
  patientsListLine3: { // styling
    position: "absolute",  
    left: "21.82%",
    right: "29.41%",
    top: "88.61%",
    bottom: "11.25%",
    height: "1px",
    width: "76.25%",
    background: "#D9D5EC",
  },
  iconsize: {
    position: "absolute",
    left: "8.33",
    right: "8.33%",
    top: "8.33%",
    bottom: "8.33%",

    /* Black / Inactive */
    background: "rgba(0, 0, 0, 0.54)"
  }

});

export default function Patients() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <div>
    <Container className={classes.picturePlace}>
      <Typography></Typography>
    </Container>
    <Container className={classes.patientsListLine1}>
    </Container>
    <Container className={classes.patientsListLine2}>
    </Container>
    <Container className={classes.patientsListLine3}>
    </Container>
    </div>
    <SideBox />
    <PatientBox />
    <TopBar />
    <SearchBox />
    <PatientsList />
    <PatientPic />
    <StarsIcon />
    <ButtonMessage />
    <ButtonBroadcast />
    <ButtonView />
    </React.Fragment>
  );
}

export function PatientPic() {
    const classes = useStyles();
    return (
        <div className={classes.patientPic}>
            <ExampleComponent
            image={patient_pic}
            roundedSize="0"
            //imageWidth="16.17%"
            //imageHeight="21.67%"
            //max-width="5%"
            //height="auto"
            z-index="1"
            />
        <h2 className="profile-name" style={{marginLeft: "100px"}}>Nicccccc</h2>
    </div>
    )
}


export function PatientBox() {
    const classes = useStyles();
    return (
    <Card className={classes.blueBox}>
        <CardContent>
          <Typography variant="h4" style={{paddingLeft:"250px",fontWeight:"bold"}}>Nicci Triani
          <br /> <br />
          </Typography>
          <Typography variant="h6" style={{paddingLeft:"250px",}}>Last Seen: 1/2/20 <br />Next Appointment: 8/8/20
          </Typography>
          <br />
          <Typography variant="h6" style={{paddingLeft:"250px",fontSize:"15px", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.76)"}}>
          NicciTriani@gmail.com <br />(555) 555-5555
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
                <Typography variant="h5">
                    Add stuff here for idk what
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}

export function TopBar() { // needs icon
    const classes = useStyles();
    return (
    <Card className={classes.topBar}>
        <CardActionArea>
            <CardContent>
                <Typography variant="h5">
                    Add New Patient
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}

export function SearchBox() {
    const classes = useStyles();
    return (
    <Card className={classes.searchBox}>
        <CardActionArea>
            <CardContent>
                <Typography variant="h5">
                    Search
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}

export function PatientsList() {
    const classes = useStyles();
    return (
    <Card className={classes.patientsList}>
        <CardActionArea>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>
            Patients
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}

export function StarIcon() {
    const classes = useStyles();
    return (
    <Card className={classes.iconsize}>
        <CardActionArea>
            <StarIcon className={classes.iconsize}>
               
            </StarIcon>
            <CardContent>
            <Typography>
            Add New Patient
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}

export function ButtonMessage() {
    const classes = useStyles();
    return (
    <Card className={classes.buttonMessage}>
        <CardActionArea>
            <CardContent>
            <Typography style={{textTransform: "uppercase", border: "none", fontWeight: "bold"}}>
            Message
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}

export function ButtonBroadcast() {
    const classes = useStyles();
    return (
    <Card className={classes.buttonBroadcast}>
        <CardActionArea>
            <CardContent>
            <Typography style={{textTransform: "uppercase", border: "none", fontWeight: "bold"}}>
            Broadcast
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}

export function ButtonView() {
    const classes = useStyles();
    return (
    <Card className={classes.buttonView}>
        <CardActionArea>
            <CardContent>
            <Typography style={{textTransform: "uppercase", border: "none", fontWeight: "bold"}}>
            View
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        );
}