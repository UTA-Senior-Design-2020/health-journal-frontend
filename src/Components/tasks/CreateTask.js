import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function CreateTask({ task, isEditMode }) {
  const classes = useStyles();
  // const { title, type, frequency, instructions } = task;
  const [taskForm, setTaskForm] = useState({ ...task });
  const [patientId, setPatientId] = useState("null");

  useEffect(() => {
    if (taskForm === null)
      setTaskForm({ title: "", type: "", frequency: 1, instructions: "" });
    setTaskForm({
      ...taskForm,
      startDate: new Date().toISOString().substring(0, 10),
    });
    console.log("task", task);
  }, []);

  async function createNewTaskRequest() {
    await axios.post("http://localhost:5000/tasks/create", {
      task: { ...taskForm },
      patientId: patientId,
    });
  }

  function handleChange(event) {
    const { id, value } = event.target;
    // console.log(id, value);

    setTaskForm({ ...taskForm, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await createNewTaskRequest();
    isEditMode(false);
  }
  function handleClose() {
    isEditMode(false);
  }

  return (
    <div className={classes.root}>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Task Form</DialogTitle>

        <DialogContent>
          {/* <DialogContentText>{type}</DialogContentText> */}
          <TextField
            autoFocus
            // margin="dense"
            id="userId"
            label="userId"
            type="userId"
            // defaultValue={title}
            required
            fullWidth
          />
          <TextField
            autoFocus
            // margin="dense"
            id="title"
            label="Title"
            type="text"
            // defaultValue={taskForm.title}
            value={taskForm.title}
            onChange={handleChange}
            // fullWidth
          />
          <TextField
            autoFocus
            // margin="dense"
            id="type"
            label="Type"
            type="text"
            value={taskForm.type}
            onChange={handleChange}
            // fullWidth
          />
          <TextField
            autoFocus
            // margin="dense"
            id="frequency"
            label="Frequency"
            type="number"
            value={taskForm.frequency}
            onChange={handleChange}
            // fullWidth
          />
          <TextField
            autoFocus
            id="startDate"
            label="State Date"
            type="date"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            value={taskForm.startDate}
            onChange={handleChange}
            fullWidth
          />
          {/* <TextField
            autoFocus
            id="type"
            label="End Date"
            type="date"
            variant="filled"
            size="small"
            defaultValue={new Date().toISOString().substring(0, 10)}
            fullWidth
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="instructions"
            label="Instructions"
            type="text"
            multiline
            rows={2}
            value={taskForm.instructions}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
