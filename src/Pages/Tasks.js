import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container, Box, Button } from "@material-ui/core";
import TaskCard from "../Components/tasks/TaskCard";
import axios from "axios";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import CreateIcon from "@material-ui/icons/Create";
import taskList from "../data/taskList";

const useStyles = makeStyles({
  root: {},
  container: {
    background: "white",
  },
  tasksContainer: {
    paddingTop: "1em",

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "space-around",
  },
  typeContainer: {
    // border: "solid red 1px",
    display: "flex",
    justifyContent: "space-between",
  },
  type: {
    // border: "solid blue 1px",

    // background: red[500],
    // color: "#fafafa",
    width: "100%",
    // height: "5em",
    // margin: "0 .5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px 4px 0 0",
    boxShadow: "inset 0px -4px 8px -2px rgba(0,0,0,0.6)",
  },
  selected: {
    boxShadow: "none",
  },
});

/* Tasks allows doctors to modify existing tasks that their patients currently have.
   At startup, doctors will see a list of template tasks that they can easily assign to a patient.
   Selecting a Task will open 'Assign To Patient'.
 */

export default function Tasks() {
  const classes = useStyles();
  const TYPES = ["medication", "lifestyle"];
  const [tasks, setTasks] = useState([{ id: 1, name: "Run" }]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    // async function getData() {
    //   let { data } = await axios.get("http://localhost:5000/tasks/");
    //   console.log("data:", data);
    //   setTasks(data);
    // }
    // getData();
  }, []);

  async function fetchTasks(patientId) {
    try {
      let apiResponse = await axios.get("tasks");
      console.log("tasks > tasks GET:", apiResponse);

      let { data, status } = apiResponse;
      console.log("tasks > apiResponse", apiResponse);
      console.log("tasks > data:", data);
      console.log("tasks > status:", status);
      if (status === 200) {
        setTasks(data);
      }
    } catch (error) {
      console.log("tasks > error:", error);
      setTasks([]);
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>
      <Box className={classes.typeContainer}>
        <Button
          variant="contained"
          style={{ background: "#2196f3", color: "#fff" }}
          className={`${classes.type} ${selectedTab === 0 && classes.selected}`}
          startIcon={<LocalHospitalIcon fontSize="large" />}
          onClick={() => {
            setSelectedTab(0);
          }}
        >
          Medication
        </Button>
        <Button
          variant="contained"
          style={{ background: "#ffeb3b" }}
          startIcon={<DirectionsRunIcon fontSize="large" />}
          className={`${classes.type} ${selectedTab === 1 && classes.selected}`}
          onClick={() => {
            setSelectedTab(1);
          }}
        >
          Life Style
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.type}
          startIcon={<CreateIcon fontSize="large" />}
          onClick={() => {
            alert("MAKING NEW");
          }}
        >
          Create New
        </Button>
      </Box>
      <Container className={classes.container} maxWidth="lg">
        {/* <Typography variant="h6">General Tasks</Typography> */}

        <Box className={classes.tasksContainer}>
          {taskList
            .filter((task) => task.type === TYPES[selectedTab])
            .map((task) => (
              <TaskCard {...task}></TaskCard>
            ))}
          {/* <TaskCard title="zyrtec" type="medication"></TaskCard>
          <TaskCard title="Clarinex"></TaskCard>
          <TaskCard title="Xyzal"></TaskCard>
          <TaskCard title="Alavert"></TaskCard>
          <TaskCard title="Astelin"></TaskCard>
          <TaskCard title="Patanase"></TaskCard>
          <TaskCard title="Alaway"></TaskCard> */}
        </Box>
      </Container>
    </div>
  );
}
