import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MaterialTable from "material-table";
import axios from "axios";

const useStyles = makeStyles({
  root: {},
});

/* Tasks allows doctors to modify existing tasks that their patients have.
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
