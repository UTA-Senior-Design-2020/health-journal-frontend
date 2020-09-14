import React from 'react'
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

const theme = createMuiTheme();

// CSS Should be done this way
const useStyles = makeStyles({
  root: {
    background: "#FBFCFD",
  },
  blueBox: { // Nicci Triani
      position: "absolute",
      //left: "21.88%",
      left: "15%",
      //right: "25.41%",
      top: "11.11%",
      bottom: "66.94%",
      background: "#2196F3",
      /* Gray / Divider */
      border: '1px solid #E5E5E5',
      /* Nicci Triani */

      width: "61%",

      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "20px",

/* identical to box height, or 136% */
      letterSpacing: "0.15px",
      
      color: "#FFFFFF",
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
  topBar: { // Add New Patient
      position: "absolute",
      left: "12.9%",
      top: "0%",
      bottom: "0%",
      width: "87.1%",
      height: "8.75%",
  },
  searchBox: { // Search 
      position: "absolute",
      left: "77.19%",
      top: "1.5%",
      //width: "18.13%",
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
      left: "55.23%",
      top: "27.6%",
      
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
      top: "27.6%",
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
  search: {
      position: 'relative',
      //left: "83%",
      marginTop: "1%",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade("rgba(200, 200, 200, 0.76)", 0.15),
      '&:hover': {
        backgroundColor: fade("rgba(200, 200, 200, 0.76)", 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
      marginRight: theme.spacing(2)
  },
  searchIcon: {
      padding: theme.spacing(0, 2),
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
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
  },
});

export default function Patients() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <SideBox />
    <PatientBox />
    {//<TopBar /> 
    }
    <TopAppBar />
    {//<SearchBox />
}
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

/*
export function TopBar() { // todo replace with material ui App Bar
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
        <Button style={{marginLeft:"82%", marginTop: "2%"}}
        color="default"
        startIcon={<ExitToAppIcon />}
        size="large"
        >
        </Button>
      </Card>
    );
}
*/

export function TopAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.topBar}>
          <AppBar position="static" color="" style={{height: "98%"}}>
            <Toolbar>
              <Button style={{marginTop: ".9%", marginLeft: "1%", display: "block",}}
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<StarsIcon />}
                >
                Add New Patient
              </Button>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
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

export function PatientPic() {
    const classes = useStyles();
    return (
        <div>
        <img src={require('./patient_pic.png')} 
            style={{
                position: "absolute",
                left: "15%",
                top: "11.22%",
                width: "19.7%",
                height: "21.67%", 
                borderRadius: "2px 0px 0px 2px", 
                boxShadow: "5px 0px 4px rgba(0,0,0,2)",
                }}/>
        </div>
    )
}

export function PatientBox() {
    const classes = useStyles();
    return ( 
      <Card className={classes.blueBox}>
        <CardContent>
          <Grid container spacing={3}>
            {/* grid here? */}
            <Typography variant="h4" style={{position: "absolute", paddingLeft:"34.96%", paddingTop: "1.94%", fontWeight:"bold"}}>
                Nicci Triani
            </Typography>
            <Typography variant="h6" style={{position: "absolute", paddingLeft:"34.96%", paddingTop: "8.47%"}}>
                Last Seen: 1/2/20 <br />Next Appointment: 8/8/20
            </Typography>
            <Typography variant="h6" style={{paddingLeft:"34.96%", paddingTop: "15.78%", fontSize:"70%", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.76)"}}>
                NicciTriani@gmail.com <br />(555) 555-5555
            </Typography>
            <Typography variant="h6" style={{position: "absolute", paddingLeft:"84.5%", paddingTop: "2.36%", fontSize:"72%", color: "rgba(255, 255, 255, 0.76)"}}>
                Currently Patient <br /> HH:MM DD/MM/YY
            </Typography>
            <AccessTimeIcon style={{
                position: "absolute",
                marginLeft: "80.8%",
                marginTop: "2.61%",
                color: "rgba(255, 255, 255, 0.76",
                fontSize: "150%"}}
            />
          </Grid>
        </CardContent>
      </Card>
    );
}

export function ButtonMessage() {
    const classes = useStyles();
    return (
    <Button className={classes.buttonWhiteFont}>
        <Typography variant="h6" style={{border: "none", fontWeight: "bold"}}>
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
        <Typography variant="h6" style={{border: "none", fontWeight: "bold"}}>
            View
        </Typography>
    </Button>
        );
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
      <Button className={classes.buttonBlueFont} style={{marginLeft: "5.21%"}}>
        <Typography variant="h5" >
               Skype
        </Typography>
      </Button>
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
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
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

export function PatientsList() {
    const classes = useStyles();
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
    return (
        <div>
        <AppBar position="static"
        style={{
          position: "absolute",
          left: "15%",
          right: "2.03%",
          top: "66.39%",
          bottom: "3.33%",
          width: "83%",
          background: "#FFFFFF",
          color: "black",
        }} >
            <Tabs value={value} onChange={handleChange} aria-label="tabs test">
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Seen" {...a11yProps(1)} />
              <Tab label="Upcoming" {...a11yProps(2)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MaterialTable
          style={{
            marginTop: "49.2%",
            zIndex: "9999", // without this, items end up behind the Tabs (?????)
            border: "none",
            boxShadow: "none",
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
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Typography variant="h4" style={{color: "black", position: "absolute", marginTop: "41.2%", zIndex: "9999"}}>
                Item two
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item thrte
        </TabPanel>
        </div>
        );
}
