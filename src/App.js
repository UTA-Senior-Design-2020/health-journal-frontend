import React from "react";
import Dashboard from "./Pages/Dashboard";
import { makeStyles } from "@material-ui/core/styles";

// CSS Should be done this way
const useStyles = makeStyles({
  root: {
    background: "#FBFCFD",
    minHeight: "100vh",
  },
});
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* TODO Add react routes here */}
      <Dashboard />
    </div>
  );
}

export default App;
