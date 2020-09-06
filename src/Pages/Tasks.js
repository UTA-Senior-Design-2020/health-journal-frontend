import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MaterialTable from "material-table";
import axios from "axios";

const useStyles = makeStyles({
  root: {},
});

export default function Tasks() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([{ id: 1, name: "Run" }]); // This is the new way of doing this.state with react hooks. it also users destructuring. We are using [] for the destrucure since useState returns something like 'stateVariable, stateUpdateFunction'. tasks contains the infromation, setTasks is a function that updates the tasks state.

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
      setTasks([]); // Api returned a status code other than 200 OK. Set tasks to nothing.
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>
      <Typography variant="h6"> Content</Typography>
      <br />
      <br />
      <MaterialTable
        title="Tasks"
        data={tasks}
        columns={[
          { title: "id", field: "id" },
          { title: "Patient", field: "patientID" },
          { title: "Title", field: "title" },
          { title: "Type", field: "groupId" },
        ]}
      />
    </div>
  );
}
