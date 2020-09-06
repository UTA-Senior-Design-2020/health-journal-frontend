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
  const [tasks, setTasks] = useState([{ id: 1, name: "Run" }]);

  useEffect(() => {
    fetchTasks();
  }, []); // the second paramter of [] will cause this useEffect function to only run once the page has loaded. It will not run after that.

  async function fetchTasks(patientId) {
    try {
      let apiResponse = await axios.get("/api/tasks");
      console.log("api:", apiResponse);
      let { data, status } = apiResponse;
      if (status === 200) {
        setTasks(data);
      }
    } catch (error) {
      setTasks([]);
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
      {/* {tasks.map((task) => {
        return (
          <div>
            <Typography>ID: {task.id}</Typography>
            <Typography>Patient: {task.patientID}</Typography>
            <Typography>Title: {task.title}</Typography>
            <Typography>Tasks Type: {task.groupId}</Typography>
          </div>
        );
      })} */}
    </div>
  );
}
