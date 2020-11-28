import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({
  root: {
    width: "20em",
    // height: "10em",
    margin: "1em",
  },
  container: {
    padding: ".5em 0 1em 1em",
    borderLeft: ({ borderColor }) => `.5em solid ${borderColor}`,
    borderRadius: "2px",
    display: "flex",
  },
  actions: {
    marginLeft: "auto",
    padding: 0,
  },
});

export default function TaskCard({ title, type, frequency, instructions }) {
  const borderColor = type === "medication" ? "#2196f3" : "#ffeb3b";

  const classes = useStyles({ borderColor });

  return (
    <Box className={classes.root}>
      <Box className={classes.container} boxShadow={3}>
        <div className={classes.info}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption" gutterBottom>
            Allergy Medicine
          </Typography>
          <Typography variant="body2">2 per day for 3 months</Typography>
        </div>
        <Box className={classes.actions}>
          <IconButton>
            <SendIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
