import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container, Box } from "@material-ui/core";
import TaskCard from "../Components/tasks/TaskCard";
import axios from "axios";

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
});

/* Tasks allows doctors to modify existing tasks that their patients currently have.
   At startup, doctors will see a list of template tasks that they can easily assign to a patient.
   Selecting a Task will open 'Assign To Patient'.
 */

export default function Tasks() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([{ id: 1, name: "Run" }]);

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

      <Container className={classes.container} maxWidth="lg">
        {/* <Typography variant="h6">General Tasks</Typography> */}
        <Box className={classes.tasksContainer}>
          <TaskCard title="zyrtec" type="medication"></TaskCard>
          <TaskCard title="Clarinex"></TaskCard>
          <TaskCard title="Xyzal"></TaskCard>
          <TaskCard title="Alavert"></TaskCard>
          <TaskCard title="Astelin"></TaskCard>
          <TaskCard title="Patanase"></TaskCard>
          <TaskCard title="Alaway"></TaskCard>
        </Box>
      </Container>
    </div>
  );
}
