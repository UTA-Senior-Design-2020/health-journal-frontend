import React from "react";
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

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function CreateTask({ task, open, handleClose }) {
  const classes = useStyles();
  const { title, type, frequency, instructions } = task;
  function handleChange(event) {
    // this.setState({ id: event.target.value });
  }

  function handleSubmit(event) {
    //Make a network call somewhere
    event.preventDefault();
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
          <DialogContentText>{type}</DialogContentText>

          <TextField
            autoFocus
            // margin="dense"
            id="title"
            label="Title"
            type="text"
            defaultValue={title}
            // fullWidth
          />
          <TextField
            autoFocus
            // margin="dense"
            id="type"
            label="Type"
            type="text"
            defaultValue={type}
            // fullWidth
          />
          <TextField
            autoFocus
            // margin="dense"
            id="type"
            label="Type"
            type="text"
            defaultValue={frequency}
            // fullWidth
          />
          <TextField
            autoFocus
            id="type"
            label="State Date"
            type="date"
            defaultValue={new Date().toISOString().substring(0, 10)}
            fullWidth
          />
          <TextField
            autoFocus
            id="type"
            label="End Date"
            type="date"
            variant="filled"
            size="small"
            defaultValue={new Date().toISOString().substring(0, 10)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="type"
            label="Type"
            type="text"
            multiline
            rows={2}
            defaultValue={instructions}
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
